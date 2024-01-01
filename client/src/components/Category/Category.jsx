import "./Category.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
const Category = () => {

    let { id } = useParams()

    const { data } = useFetch(`/api/products?populate=*&[filters][category][id]=${id}`)
    console.log(data)
    return <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
            {
                        data?.data?.[0]?.attributes?.category?.data?.attributes?.title
                    }

            
            </div>
            <Products innerPage={true} products={data}/>
        </div>
    </div>;
};

export default Category;

