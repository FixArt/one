import { NavLink } from "react-router-dom";
function FooterNavigation(props) {
    return (<>
        <nav className="footer_navigation">
            <ul>
                <li><NavLink to="/">Домашня сторінка</NavLink></li>
                <li><NavLink to="/products">Продукти</NavLink></li>
                <li><NavLink to="/contact">Контактна інформація</NavLink></li>
            </ul>
        </nav>
    </>);
}

export default FooterNavigation;