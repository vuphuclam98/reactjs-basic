import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Sidebar = props => {
    return (
        <div>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <Link to="/">
                <a className="sidebar-brand d-flex align-items-center justify-content-center">
                <h4 style={{color: '#fff'}}>Home</h4>
                </a>
                </Link>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item">
                    <Link to="/admin">
                        <a className="nav-link" href="index.html">
                            <i className="fas fa-fw fa-tachometer-alt" />
                            <span>Dashboard</span>
                        </a>
                    </Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}
                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <Link to="/admin/categories">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog" />
                            <span>Category</span>
                        </a>
                    </Link>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">lựa chọn chức năng</h6>
                            <Link to="/admin/Categories" >
                                <a className="collapse-item" href="buttons.html">Danh Sách</a>
                            </Link>
                            <Link to="/admin/AddCategory" >
                                <a className="collapse-item" href="buttons.html">Thêm</a>
                            </Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <Link to="/admin/products">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog" />
                            <span>Products</span>
                        </a>
                    </Link>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">lựa chọn chức năng</h6>
                            <Link to="/admin/Products" >
                                <a className="collapse-item" href="buttons.html">Danh Sách</a>
                            </Link>
                            <Link to="/admin/AddProduct" >
                                <a className="collapse-item" href="buttons.html">Thêm</a>
                            </Link>
                        </div>
                    </div>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}
                <div className="sidebar-heading">
                    Addons
        </div>
                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder" />
                        <span>Pages</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <a className="collapse-item" href="login.html">Login</a>
                            <a className="collapse-item" href="register.html">Register</a>
                            <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                            <div className="collapse-divider" />
                            <h6 className="collapse-header">Other Pages:</h6>
                            <a className="collapse-item" href="404.html">404 Page</a>
                            <a className="collapse-item" href="blank.html">Blank Page</a>
                        </div>
                    </div>
                </li>
                {/* Nav Item - Charts */}
                <li className="nav-item">
                    <a className="nav-link" href="charts.html">
                        <i className="fas fa-fw fa-chart-area" />
                        <span>Charts</span></a>
                </li>
                {/* Nav Item - Tables */}
                <li className="nav-item active">
                    <a className="nav-link" href="tables.html">
                        <i className="fas fa-fw fa-table" />
                        <span>Tables</span></a>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" />
                </div>
            </ul>
        </div>  
    )
}

Sidebar.propTypes = {

}

export default Sidebar
