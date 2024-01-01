import "./Category.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
const Category = ({categories}) => {

  const navigate = useNavigate()
  return (
    <div className="shop-by-category">
      <div className="categories">
      
        {categories?.map((item) => (
          <div key={item.id} className="category" onClick={()=>navigate(`/category/${item.id}`)}>
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                 item.attributes.image.data[0].attributes.url
              }
            />
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Category;
