import RelatedProducts from "./RelatedProducts/RelatedProducts";
import React,{useState,useContext} from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import prod from "../../assets/products/earbuds-prod-2.webp";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Category from "../Category/Category";
import { Contexthoga } from "../../utils/Context";

const SingleProduct = () => {
  const {handleAddToCart} = useContext(Contexthoga)
  const[quantity,setQuantity] = useState(1)
  const {id}=useParams()
  const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
  if(!data) return
  const product = data.data[0].attributes

  const increment = () => {
    setQuantity(preValue => preValue + 1)
  }
  const decrement = () => {
    setQuantity((preValue) => {
      if(preValue === 1) { 
        return 1
      }
      return preValue - 1
    }
     
      )
  }
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={
              process.env.REACT_APP_DEV_URL+
              product.image.data[0].attributes.url} alt="" />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="desc">{product.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
              <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button className="add-to-cart-button" onClick={()=>{
                handleAddToCart(data.data[0],quantity)
                setQuantity(1)
              }}>
                <FaCartPlus size={20} />
                Add To Cart
              </button>
            </div>

            <span className="divier"></span>
            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>{product.category.data.attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF /> 
                  <FaTwitter />
                 <FaInstagram />
                  <FaLinkedinIn />
                  <FaPinterest />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
        productId = {id}
        categoryId = {product.category.data.id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
