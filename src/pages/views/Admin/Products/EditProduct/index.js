import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types';
import {BrowserRouter as Router, useParams, useHistory,Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import apiProduct from "../../../../../api/productApi"
import firebase from '../../../../../firebase'

const EditProduct = ({ products, categories, onEdit }) => {
    const getAllProduct = async () => {
        try {
            const {data} = await apiProduct.getAll();
            return data;
        } catch (error) {
          console.log('failed to request API: ', error)
        }
      }

    useEffect(()=>{
        if(products.length == 0){
            getAllProduct().then(products=>{
                let product= products.find(pro => pro.id == id);
                return setinfoProduct(product);
            });
        }else{
            let product= products.find(products=> products.id == id)
            return setinfoProduct(product);
        }
    },[])

    const { register, handleSubmit, errors } = useForm();
    let { id } = useParams();
    // const product = products.find(product => product.id == id);
    const [infoProduct, setinfoProduct] = useState({});
    const onHandleSubmit = (data) => {
        console.log(data)
        let file = data.image[0];
        // // // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        console.log(storageRef);
        // // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                // console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newObj = {
                    id: infoProduct.id,
                    ...data,
                    image: url
                }
                console.log(newObj);
                // đẩy dữ liệu ra ngoài app.js thông qua props onEdit
                onEdit(newObj);
		        window.location = "/admin/products";
            })
        });

    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50" method="POST">
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="name" defaultValue={infoProduct.name} ref={register({required:true, minLength:5})} className="form-control" />
                    {errors.name && errors.name.type === "required" && <span>Không để trống</span>}
                    {errors.name && errors.name.type === "minLength" && <span>Bạn phải nhập ít nhất 5 ký tự</span>}
                </div>

                <div className="form-group">
                    <label>Danh Mục</label>
                    <select className="form-control" name="cate_id" ref={register}>
                        {categories.map(cate =>(
                            <option value={cate.id} selected={cate.id == infoProduct.cate_id}>{cate.name}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="inputGroupFile02">Ảnh sản phẩm</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file"
                                className="custom-file-input"
                                id="inputGroupFile02"
                                name="image"
                                // onChange={onUploadImg}
                                ref={register({required:true})}
                            />
                            <label className="custom-file-label overflow-hidden" htmlFor="inputGroupFile02" aria-describedby="imageHelp">{infoProduct.image}</label>
                        </div>
                    </div>
                    <br />
                    <img src={infoProduct.image} className="img-thumbnail" style={{width:"150px"}} />
                </div>

                <div className="form-group">
                    <label htmlFor="productName">Giá sản phẩm</label>
                    <input type="text" name="price" defaultValue={infoProduct.price} ref={register({required:true, minLength:1})} className="form-control" />
                    {errors.price && errors.price.type === "required" && <span>Không để trống</span>}
                    {errors.price && errors.price.type === "minLength" && <span>Bạn phải nhập ít nhất 5 ký tự</span>}
                </div>
                <button className="btn btn-primary">Cập nhật</button>
                <Link to="/admin/products">
                <button type="button" class="btn btn-danger mx-3">Hủy</button>
                </Link>
            </form>
        </div>
    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct