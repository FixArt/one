import "./product_card.css";
import { Link } from "react-router-dom";
function ProductCard(props)
{
    return (<>
        <div className="product_card">
            <div>
                <img className="card_image" src={props.picture}/>
                <h1 className="card_title">{props.title}</h1>
                <p className="card_description">{props.description}</p>
            </div>
            <p className="card_price">Ціна: {props.price}$</p>
            <Link className="card_buy" to={`/product/${props.id}`}>Більше...</Link>
        </div>
    </>);
}

export default ProductCard;
