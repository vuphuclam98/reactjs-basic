import React, { useState, useEffect } from 'react';
import Routers from './routers'
import apiProduct from './api/productApi';
import apiCategory from './api/categoryApi';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import AddProduct from './components/AddProduct';
function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(false);
  const [color, setColor] = useState('green');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiProduct.getAll();
        const category = await apiCategory.getAll();
        // console.log(data);
        setCategories(category.data)
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }
  , []);


  const AddCategory = async (newData) =>{
    try {
      const result = await apiCategory.create(newData);
      setCategories([
        ...categories,
        newData
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const AddProduct = async (newData) => {
    console.log(newData);
    try {
      const result = await apiProduct.create(newData);
      setProducts([
        ...products,
        newData
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const EditProduct = async (data) => {
      try {
        const {id} = data;
        console.log(data)
        const result = await apiProduct.update(id,data);
        // const newobj = products.map(pro => pro.id)
      } catch (error) {
        console.log('failed to request API: ', error)
      }
  }

  const EditCategory = async (data) => {
    try {
      const {id} = data;
      console.log(data)
      const result = await apiCategory.update(id,data);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
}

  const RemoveCategory = (id) => {
    console.log(id);
    const result = apiCategory.remove(id);
    const newCate = categories.filter(cate =>cate.id !== id);
    setCategories(newCate);
  }

  const RemoveProduct = (id) => {
    console.log(id);
    const result = apiProduct.remove(id); 
    const newProduct = products.filter(pro =>pro.id !== id);
    setProducts(newProduct);
  }
  // const onHanleAdd = (product) => {
  //   const newProduct = {
  //     id: products.length + 1,
  //     ...product
  //   }
  //   setProducts([
  //     ...products,
  //     newProduct
  //   ])
  // }


  return (
    <div className="App">
      <Routers 
      products={products} 
      categories ={categories} 
      onRemoveProduct={RemoveProduct} 
      onAddProduct={AddProduct} 
      onEditProduct={EditProduct}
      onAddCategory={AddCategory} 
      onEditCategory={EditCategory}
      onRemoveCategory={RemoveCategory} 
      />
    </div>
  )
}
export default App;