import { PRODUCTS } from "../../AllData";
import CartCard from "../../components/main/content/cart_card";
import { NavLink } from "react-router-dom";
import "./cart.css";
function Cart()
{
    return (<div className="cart">
        <div className="cartHead">
            <h1>Кошик</h1>
            <p><NavLink to="/order">Перейти до замовлення</NavLink></p>
        </div>
        <ul className="cart_items">
            {PRODUCTS.map((given, index) => {
                return (<li key={index}><CartCard id={index} picture={given.image} title={given.name} description={given.description} price={given.price} /></li>);
            })}
        </ul>
    </div>);
}

export default Cart;