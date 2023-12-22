import ProductInformation from "../components/main/content/product_information";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

function Product()
{
    let { id } = useParams();
    const [element, setElement] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/paintings/${id}`)
            .then(response => response.json())
            .then(json => setElement(json))
    }, [id]);
    return (<ProductInformation picture={element.image} comments={element.comments} title={element.name} description={element.description} price={element.price} />);
}

export default Product;
