import ProductCarousel from '../../components/main/content/product_carousel';

function Thanks()
{
    return (<>
        <h1 style={{textAlign: "center", fontSize: "2em"}}>Щиро вдячні, що вам сподобалися наші товари!</h1>
        <p style={{textAlign: "center", fontSize: "2em"}}>Рекомендуємо вам ці товари:</p>
        <ProductCarousel></ProductCarousel>
    </>);
}

export default Thanks;