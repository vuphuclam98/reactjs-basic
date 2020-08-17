import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Categories = ({ categories,onRemove}) => {
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
                <Link to="/admin/AddCategory" className="btn btn-primary">Thêm Danh Mục</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên Danh Mục</th>
                                    <th scope="col" width="150">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(({ id, name}, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{name}</td>
                                        <td>
                                            <Link className="btn btn-primary" to={`/admin/category/edit/${id}`}>Sửa</Link>
                                            <button className="btn btn-danger ml-3" onClick={() => removeHandle(id)}>Xóa</button>
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

Categories.propTypes = {
    products: PropTypes.array,
    onRemove: PropTypes.func
}

export default Categories
