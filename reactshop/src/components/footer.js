import FooterNavigation from "./footer/footer_navigation";
import Social from "./footer/social";
import "./footer.css"
import Logo from "./header/logo";
import DarkTile from "../assets/images/darktile.jpeg"

function Footer()
{
    return (<footer style={{backgroundImage: `url(${DarkTile})`}}>
        <div className="grows">
            <FooterNavigation />
            <Social />
        </div>
        <Logo />
    </footer>);
}
export default Footer;