import ProductCard from "./product_card";
import "./product_carousel_wrappable.css";
function ProductCarouselWrappable(props) {
    return (<ul className="product_carousel_wrappable">
        {props.products.map((given, index) => {
            return (<li key={given}><ProductCard id={given.id} picture={given.image} title={given.name} description={given.description} price={given.price} /></li>)
        })}
    </ul>);
}

export default ProductCarouselWrappable;