import { NavLink } from "react-router-dom";
function HeaderNavigation(props) {
    return (<>
        <nav className="header_navigation">
            <ul>
                <li><NavLink to="/">Домашня сторінка</NavLink></li>
                <li><NavLink to="/products">Продукти</NavLink></li>
                <li><NavLink to="/contact">Контактна інформація</NavLink></li>
            </ul>
        </nav>
    </>);
}

export default HeaderNavigation;