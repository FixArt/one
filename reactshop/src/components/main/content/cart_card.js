import "./cart_card.css";
import { Link } from "react-router-dom";
function CartCard(props)
{
    return (<>
        <div className="cart_card">
            <img className="card_image" src={props.picture}/>
            <div className="cart_card_about">
                <div className="grows">
                    <h1 className="card_title">{props.title}</h1>
                    <h2>Опис</h2>
                    <p className="card_description">{props.description}</p>
                    <p className="card_price">Ціна: {props.price}$</p>
                </div>
                <p><Link to={`/product/${props.id}`}>Більше...</Link></p>
            </div>
        </div>
    </>);
}

export default CartCard;
