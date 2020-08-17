import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
/* Admin phần product */
import ProductsManager from '../pages/views/Admin/Products/Products'
// import DetailProduct from '../pages/views/Admin/Products/DetailProduct';
import AddProduct from '../pages/views/Admin/Products/AddProduct';
import EditProduct from '../pages/views/Admin/Products/EditProduct';

/* Admin phần category */
import Categories from '../pages/views/Admin/Category/Categories'
import AddCategory from '../pages/views/Admin/Category/AddCategory';
import EditCategory from '../pages/views/Admin/Category/EditCategory';
//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Detail from '../pages/views/Main/Detail';
import ListProduct from '../pages/views/Main/listProduct';



const Routers = ({categories, products, onAddProduct, onEditProduct, onRemoveProduct, onAddCategory, onEditCategory, onRemoveCategory }) => {
    /* PHần product */
    const onHandleAddProduct = (product) =>{
        onAddProduct(product);
    }

    const onHandleEditProduct = (id) =>{
        onEditProduct(id);
    }

    const removeProduct = (id) => {
        onRemoveProduct(id)
    }
    /* end product */

    /* PHần Category */
    const onHandleAddCategory = (cate) =>{
        onAddCategory(cate);
    }

    const onHandleEditCategory = (id) =>{
        onEditCategory(id);
    }

    const removeCategory = (id) => {
        onRemoveCategory(id)
    }
    /* end Category */
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?">
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard products={products} categories={categories} />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} categories={categories} onRemove={removeProduct} />
                            </Route>
                            
                            <Route path="/admin/AddProduct">
                                <AddProduct onAdd={onHandleAddProduct} categories={categories} />
                            </Route>

                            <Route path="/admin/product/edit/:id"> 
                                <EditProduct products={products} categories={categories} onEdit={onHandleEditProduct}/>
                            </Route>

                            {/* <Route path="/admin/product/:id">
                                <DetailProduct product={products}/>
                            </Route> */}

                            {/* Router phần danh mục */}
                            <Route path='/admin/categories'>
                                <Categories  categories={categories} onRemove={removeCategory} />
                            </Route>
                            
                            <Route path="/admin/AddCategory"> 
                                <AddCategory onAdd={onHandleAddCategory}/>
                            </Route>}

                            <Route path="/admin/category/edit/:id"> 
                                <EditCategory categories={categories} onEdit={onHandleEditCategory}/>
                            </Route>

                            {/* <Route path="/admin/category/:id">
                                <DetailCategory categories={categories} />
                            </Route> */}
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route path="/">
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home productsHome ={products}/>
                            </Route>

                            <Route path="/product-detail/:id">
                                <Detail product={products} />
                            </Route>

                            <Route path="/product-grid"> 
                                <ListProduct products={products} categories={ categories } />
                            </Route>

                            <Route path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
