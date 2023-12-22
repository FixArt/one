import HeaderCart from "./header/header_cart";
import HeaderNavigation from "./header/header_navigation";
import HeaderSearch from "./header/header_search";
import Logo from "./header/logo";
import "./header.css";
import DarkTile from "../assets/images/darktile.jpeg"

function Header(props) {
    return (<header style={{backgroundImage: `url(${DarkTile})`}}>
        <div className="header_section">
            <Logo />
            <HeaderSearch />
            <HeaderNavigation />
        </div>
        <HeaderCart />
    </header>);
}

export default Header;