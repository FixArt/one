import ProductCarouselWrappable from "../components/main/content/product_carousel_wrappable";
import "./search.css"
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [paintings, setPaintings] = useState([]);
    useEffect(() => {
        var queryAppend = [];
        if (searchParams.get("query") !== undefined && searchParams.get("query").length > 0) queryAppend.push(`searched=${encodeURIComponent(searchParams.get("query"))}`);
        if (searchParams.get("author") !== undefined && searchParams.get("author").length > 0) queryAppend.push(`author=${encodeURIComponent(searchParams.get("author"))}`);
        if (searchParams.get("size") !== undefined && searchParams.get("size").length > 0) queryAppend.push(`size=${encodeURIComponent(searchParams.get("size"))}`);
        if (searchParams.get("category_id") !== undefined && searchParams.get("category_id").length > 0) queryAppend.push(`category_id=${encodeURIComponent(searchParams.get("category_id"))}`);
        fetch(`http://127.0.0.1:8000/api/paintings/query?${queryAppend.join('&')}`)
            .then(response => response.json())
            .then(json => {
                setPaintings(json);
            })
    }, [searchParams]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/paintings/query/authors`)
            .then(response => response.json())
            .then(json => {
                setAuthors(json);
            });
        fetch(`http://127.0.0.1:8000/api/paintings/query/sizes`)
            .then(response => response.json())
            .then(json => {
                setSizes(json);
            });
            fetch(`http://127.0.0.1:8000/api/categories`)
                .then(response => response.json())
                .then(json => {
                    setCategories(json);
                });
    }, []);
    return (<>
        <form className="main_search" method="get" action="/search">
            <input type="search" name="query" />
            {/* TODO Get possible values from endpoints. */}
            <select name="author">
                <option selected value="">Any</option>
                {
                    authors.map((value, index) => {
                        return (<option key={index} value={value}>{value ?? "None"}</option>);
                    })
                }
            </select>
            <select name="size">
                <option selected value="">Any</option>
                {
                    sizes.map((value, index) => {
                        return (<option key={index} value={value}>{value ?? "None"}</option>);
                    })
                }
            </select>
            <select name="category_id">
                <option selected value="">Any</option>
                {
                    categories.map((value) => {
                        return (<option key={value.id} value={value.id}>{value.name}</option>);
                    })
                }
            </select>
            <button type="submit">Search</button>
        </form>
        <h2 className="beautiful_content" style={{ textAlign: "center" }}>Знайдено</h2>
        <ProductCarouselWrappable products={paintings} />
    </>);
}

export default Home;