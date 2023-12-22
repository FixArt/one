import "./sidebar.css"
import Category from "./sidebar/category";
import Background2 from "../../assets/images/background2.jpeg";
import { useState, useEffect } from "react";
function Sidebar(props)
{
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/categories')
            .then(response => response.json())
            .then(json => setCategories(json))
    }, []);
    return (<div className="sidebar" style={{backgroundImage: `url(${Background2})`}}>
        {categories.map((given, index) => {
            return (
                <Category key={given.id} text={given.name} />
            );
        })}
    </div>);
}

export default Sidebar;