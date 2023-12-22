import Header from "./header";
import Footer from "./footer";
import { Outlet } from 'react-router-dom';
import "./layout.css";
import Background from "../assets/images/background.png"
function Layout(props)
{
    // console.log(props.children);
    return (<div className="layout" style={{backgroundImage: `url(${Background})`}}>
        <div className="layoutUpper">
            <Header />
            <Outlet />
        </div>
        <div className="layoutBottom">
            <Footer />
        </div>
    </div>);
}

export default Layout;