import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
const ProductsManager = ({ products,categories, onRemove }) => {
    const removeHandle = (id) => {
        swal({
            title: "Bạn chắc chắn muốn xóa",
            text: "Sau khi xóa, bạn sẽ không thể khôi phục tệp tưởng tượng này!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Xóa thành công", {
                icon: "success",
              });
              onRemove(id)
            } else {
              swal("Xóa không thành công");
            }
          });
    }   

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h3 mb-2 text-gray-800">Quản lý sản phẩm</h1>
                <Link to="/admin/AddProduct" className="btn btn-primary">Thêm sản phẩm</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Danh Mục</th>
                                    <th scope="col">Ảnh sản phẩm</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col" width="150">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, name,cate_id, image, price }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{name}</td>
                                        
                                        <td>{categories.map(cate => cate.id == cate_id ? cate.name :console.log("lỗi không lấy đuoẹc danh mục"))}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{price}</td>
                                        <td>
                                            <Link className="btn btn-primary" to={`/admin/product/edit/${id}`}>Sửa</Link>
                                            <button className="btn btn-danger ml-3" onClick={() => removeHandle(id)} >Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {
    products: PropTypes.array,
    onRemove: PropTypes.func
}

export default ProductsManager
