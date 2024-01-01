import "./Home.scss";
import React,{ useEffect,useContext } from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Contexthoga } from "../../utils/Context";
const Home = () => {
const {categories,setCategories,products,setProducts} = useContext(Contexthoga)
  useEffect(() => {
    getCategories()
    getProducts()
  },[])

   const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*")
    .then((res) => {
      console.log(res)
      setCategories(res.data)
    })
   }
   const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*")
    .then((res) => {
      console.log(res)
      setProducts(res)
    })
   }
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories}/>
          <Products products={products} headingText="Popular Products"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
