import "./header_search.css";
function HeaderSearch(props)
{
    return (<>
        <form className="header_search" method="get" action="/search">
            <input type="search" name="query"/>
            <button type="submit">Search</button>
        </form>
    </>);
}

export default HeaderSearch;