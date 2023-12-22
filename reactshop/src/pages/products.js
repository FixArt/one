import ProductCarousel from "../components/main/content/product_carousel";
import "./products.css"
import Sidebar from "../components/main/sidebar";
import { useState, useEffect } from "react";

function Products()
{
    const [paintings, setPaintings] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/paintings')
            .then(response => response.json())
            .then(json => setPaintings(json))
    }, []);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/categories')
            .then(response => response.json())
            .then(json => setCategories(json))
    }, []);
    return (<div className="products">
            <Sidebar />
            <div className="productsForCategories">
                {categories.map((given, index) => {
                    return (<>
                        <h2>{given.name}</h2>
                        <ProductCarousel products={paintings} />
                    </>)
                })}
            </div>
        </div>);
}

export default Products;