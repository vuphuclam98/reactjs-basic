import React, { useState } from 'react'
import PropTypes from 'prop-types';
import {BrowserRouter as Router, useParams, useHistory,Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import { Editor } from '@tinymce/tinymce-react';
import firebase from '../../../../../firebase'

const AddCategory = ({ onAdd }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    // const [desc, setDesc] = useState("");
    const onHandleSubmit = (data) => {
        const newData = {
            id: 1,
            ...data
        }
        console.log(newData);
        onAdd(newData);
        history.push("/admin/categories")
    }
    return (
        <div>
            <form className="w-50" onSubmit={handleSubmit(onHandleSubmit)} method="POST">
                <div className="form-group">
                    <label htmlFor="cateName">Tên Danh Mục</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="cateName"
                        aria-describedby="nameHelp"
                        ref={register({required:true,minLength:5})}
                    />
                    {errors.name && errors.name.type === "required" && <span>Không để trống</span>}
                    {errors.name && errors.name.type === "minLength" && <span>Bạn phải nhập ít nhất 5 ký tự</span>}
                </div>

                <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
                <Link to="/admin/Categories">
                <button type="button" class="btn btn-danger mx-3">Hủy</button>
                </Link>
            </form>
        </div >
    )
}

AddCategory.propTypes = {
    onAdd: PropTypes.func
}

export default AddCategory