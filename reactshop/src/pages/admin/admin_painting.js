import './admin_painting.css';
import { useState, useEffect } from "react";

function AdminPainting() {
    const [paintings, setPaintings] = useState([]);
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState(0.0);
    const [newDescription, setNewDescription] = useState("");
    const [newURL, setNewURL] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newSize, setNewSize] = useState("");
    const [newCategoryId, setNewCategoryId] = useState("");
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/paintings')
            .then(response => response.json())
            .then(json => setPaintings(json))
    }, []);

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/categories')
            .then(response => response.json())
            .then(json => setCategories(json))
    }, []);

    const nullIfEmpty = (given) => {
        if (given === null || given === undefined) return null;
        if (given.length > 0) return given;
        else return null;
    }

    const addPainting = () => {
        const name = nullIfEmpty(newName?.trim());
        const price = newPrice;
        const description = nullIfEmpty(newDescription?.trim());
        const url = nullIfEmpty(newURL?.trim());
        const author = nullIfEmpty(newAuthor?.trim());
        const size = nullIfEmpty(newSize?.trim());
        const category_id = nullIfEmpty(newCategoryId);
        if (name) {
            fetch('http://127.0.0.1:8000/api/paintings', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json; charset = utf-8",
                },
                body: JSON.stringify({
                    name: name, price: price, description: description, url: url, author: author, size: size, category_id: category_id
                })
            })
                .then(request => {
                    console.log(request);
                    return request.text();
                })
                .then(console.log)
                // .then(request => request.json())
                // .then(json => {
                //     setPaintings([...paintings, json]);
                //     setNewName("");
                //     setNewPrice(0.0);
                //     setNewDescription("");
                //     setNewURL("");
                //     setNewAuthor("");
                //     setNewSize("");
                //     setNewCategoryId("");
                // })
        }
    };
    const updatePainting = (id) => {
        const painting = paintings.find(painting => painting.id === id);
        fetch(`http://127.0.0.1:8000/api/paintings/${id}`, {
            method: 'PUT',
            body: JSON.stringify(painting),
            headers: {
                'Content-Type': "application/json; charset = utf-8",
            },
        })
            .then(response => response.json())
            .then(() => {
                return {
                    message: "Painting updated"
                };
            });
    }
    const deletePainting = (id) => {
        fetch(`http://127.0.0.1:8000/api/paintings/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(() => {
                setPaintings(paintings.filter(painting => painting.id !== id))
            })
    };
    const onChangeHandler = (id, key, value) => {
        setPaintings(values => {
            return values.map(painting => {
                if (painting.id === id) {
                    return { ...painting, [key]: value };
                }
                return painting;
            })
        });
    };
    return (<>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>URL</th>
                    <th>Author</th>
                    <th>Size</th>
                    <th>Category</th>
                    <th>Upload date</th>
                    <th>Update date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {paintings.map(painting => (<tr key={painting.id}>
                    <td>
                        <input type="text" maxLength={128} value={painting.name ?? ""} onChange={e => onChangeHandler(painting.id, "name", e.target.value)} />
                    </td>
                    <td>
                        <input type="number" min={0} value={painting.price} onChange={e => onChangeHandler(painting.id, "price", e.target.value)} />
                    </td>
                    <td>
                        <input type="text" maxLength={65535} value={painting.description ?? ""} onChange={e => onChangeHandler(painting.id, "description", e.target.value)} />
                    </td>
                    <td>
                        <input type="url" maxLength={256} value={painting.url ?? ""} onChange={e => onChangeHandler(painting.id, "url", e.target.value)} />
                    </td>
                    <td>
                        <input type="text" maxLength={128} value={painting.author ?? ""} onChange={e => onChangeHandler(painting.id, "author", e.target.value)} />
                    </td>
                    <td>
                        <input type="text" maxLength={16} value={painting.size ?? ""} onChange={e => onChangeHandler(painting.id, "size", e.target.value)} />
                    </td>
                    <td>
                        <select name="category_id" value={painting.category_id ?? ""} onChange={e => onChangeHandler(painting.id, "category_id", e.target.value)}>
                            <option value="">None</option>
                            {
                                categories.map((value) => {
                                    return (<option key={value.id} value={value.id}>{value.name}</option>);
                                })
                            }
                        </select>
                    </td>
                    <td><time dateTime={painting.created_at}>{new Date(painting.created_at).toLocaleDateString()}</time></td>
                    <td><time dateTime={painting.updated_at}>{new Date(painting.updated_at).toLocaleDateString()}</time></td>
                    <td>
                        <button onClick={() => updatePainting(painting.id)}>Edit</button>
                        <button onClick={() => deletePainting(painting.id)}>Delete</button>
                    </td>
                </tr>))
                }
            </tbody>
            <tfoot>
                <tr>
                    <td><input type='text' maxLength={128} value={newName} onChange={(e) => setNewName(nullIfEmpty(e.target.value))}></input></td>
                    <td><input type='number' min={0} value={newPrice} onChange={(e) => setNewPrice(nullIfEmpty(e.target.value))}></input></td>
                    <td><input type='text' maxLength={65535} value={newDescription} onChange={(e) => setNewDescription(nullIfEmpty(e.target.value))}></input></td>
                    <td><input type='url' maxLength={256} value={newURL} onChange={(e) => setNewURL(nullIfEmpty(e.target.value))}></input></td>
                    <td><input type='text' maxLength={128} value={newAuthor} onChange={(e) => setNewAuthor(nullIfEmpty(e.target.value))}></input></td>
                    <td><input type='text' maxLength={16} value={newSize} onChange={(e) => setNewSize(nullIfEmpty(e.target.value))}></input></td>
                    <td><select name="category_id" value={newCategoryId} onChange={(e) => setNewCategoryId(nullIfEmpty(e.target.value))}>
                        <option value="">None</option>
                        {
                            categories.map((value) => {
                                return (<option key={value.id} value={value.id}>{value.name}</option>);
                            })
                        }
                    </select></td>
                    <td></td>
                    <td></td>
                    <td><button onClick={addPainting}>Add Painting</button></td>
                </tr>
            </tfoot>
        </table>
    </>);
}

export default AdminPainting;