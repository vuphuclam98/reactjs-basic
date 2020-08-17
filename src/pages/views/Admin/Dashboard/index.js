import PropTypes from 'prop-types'
import React, { useState } from 'react'
const Dashboard = ({products,categories}) => {
    const countCategory = categories.length;
    const countProduct = products.length;
    return (
        <div>
            <h1 class="mt-4 mb-5 text-left">Dashboard</h1>
            <div class="row">
                <div class="col-xl-4 col-md-6">
                    <div class="card text-white mb-4">
                        <div class="card-body bg-primary">Danh Mục</div>
                        <div class="card-footer mb-3 text-danger d-flex align-items-center justify-content-between">
                           Tổng số danh mục: {countCategory}  
                        </div>

                        <div class="card-footer mb-3 text-danger d-flex align-items-center justify-content-between">
                           Tổng số sản phẩm theo danh mục:  
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="card text-white mb-4">
                        <div class="card-body bg-success">Sản Phẩm</div>
                        <div class="card-footer mb-3 text-danger d-flex align-items-center justify-content-between">
                           Tổng số sản phẩm:  {countProduct}
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-md-6">
                    <div class="card text-white mb-4">
                        <div class="card-body bg-warning">Blog</div>
                        <div class="card-footer mb-3 text-danger d-flex align-items-center justify-content-between">
                           Tổng số blog:  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
