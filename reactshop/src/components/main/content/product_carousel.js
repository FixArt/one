import { PRODUCTS } from "../../../AllData";
import ProductCard from "./product_card";
import "./product_carousel.css";
function ProductCarousel(props) {
    return (<ul className="product_carousel">
        {props.products.map((given, index) => {
            return (<li key={given}><ProductCard id={given.id} picture={given.image} title={given.name} description={given.description} price={given.price} /></li>)
        })}
    </ul>);
}

export default ProductCarousel;