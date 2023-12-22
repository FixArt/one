import { NavLink } from "react-router-dom";
import "./logo.css"
function Logo(props)
{
    return (<>
        <h1 className="logo"><NavLink to="/">✯ Картинографія</NavLink></h1>
    </>);
}

export default Logo;