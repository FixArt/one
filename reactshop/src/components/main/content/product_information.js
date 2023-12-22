import ProductCarousel from "./product_carousel";
import "./product_information.css";
function ProductInformation(props)
{
    return (<>
        <div className="product_information">
            <img className="product_information_image" src={props.picture} />
            <div className="product_information_more">
                <div className="product_information_about">
                    <h1 className="product_information_title">{props.title}</h1>
                    <h2>Опис</h2>
                    <p className="product_information_description">{props.description ?? "Опис не вказано."}</p>
                    <p>Автор: {props.author ?? "немає"}.</p>
                    <p>Розмір: {props.size ?? "немає"}.</p>
                </div>
                <div className="product_information_buyer">
                    <p className="product_information_price">Ціна: {props.price}$</p>
                    <button className="product_information_buy">Додати до корзини</button>
                </div>
            </div>
        </div>
        {/* <h1 style={{textAlign: "center"}}>Що про це думають користувачі?</h1>
            {props.comments.map((given, index) => {
                return (<div className="product_information_comment">
                    <div className="product_information_comment_upper">
                        <h1>{given.author}</h1>
                        <p>{"★".repeat(given.rating)} ({given.rating}/10)</p>
                    </div>
                    <p className="product_information_comment_down">{given.text}</p>
                </div>)
            })}
        <h2 style={{textAlign: "center"}}>Схожі продукти</h2>
        <ProductCarousel /> */}
    </>);
}

export default ProductInformation;
