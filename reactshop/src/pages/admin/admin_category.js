import './admin_category.css';
import { useState, useEffect } from "react";

function AdminCategory() {
    const [categories, setCategories] = useState([]);
    const [newName, setNewName] = useState("");
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/categories')
            .then(response => response.json())
            .then(json => setCategories(json))
    }, []);

    const nullIfEmpty = (given) => {
        if(given === null || given === undefined) return null;
        if(given.length > 0) return given;
        else return null;
    }

    const addCategory = () => {
        const name = nullIfEmpty(newName.trim());
        if (name) {
            fetch('http://127.0.0.1:8000/api/categories', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json; charset = utf-8"
                },
                body: JSON.stringify({
                    name
                })
            })
                .then(response => response.json())
                .then(json => {
                    setCategories([...categories, json]);
                    setNewName("");
                })
        }
    };
    const updateCategory = (id) => {
        const category = categories.find(category => category.id === id);
        fetch(`http://127.0.0.1:8000/api/categories/${id}`, {
            method: 'PUT',
            body: JSON.stringify(category),
            headers: {
                'Content-Type': "application/json; charset = utf-8",
            },
        })
            .then(response => response.json())
            .then(() => {
                return {
                    message: "Category updated"
                };
            });
    }
    const deleteCategory = (id) => {
        fetch(`http://127.0.0.1:8000/api/categories/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(() => {
                setCategories(categories.filter(painting => painting.id !== id))
            })
    };
    const onChangeHandler = (id, key, value) => {
        setCategories(values => {
            return values.map(category => {
                if (category.id === id) {
                    return { ...category, [key]: value };
                }
                return category;
            })
        });
    };
    return (<>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Upload date</th>
                    <th>Update date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {categories.map(category => (<tr key={category.id}>
                    <td>
                        <input type="text" maxLength={128} value={category.name ?? ""} onChange={e => onChangeHandler(category.id, "name", e.target.value)} />
                    </td>
                    <td><time dateTime={category.created_at}>{new Date(category.created_at).toLocaleDateString()}</time></td>
                    <td><time dateTime={category.updated_at}>{new Date(category.updated_at).toLocaleDateString()}</time></td>
                    <td>
                        <button onClick={() => updateCategory(category.id)}>Edit</button>
                        <button onClick={() => deleteCategory(category.id)}>Delete</button>
                    </td>
                </tr>))
                }
            </tbody>
            <tfoot>
                <tr>
                    <td><input type='text' value={newName} onChange={(e) => setNewName(nullIfEmpty(e.target.value))}></input></td>
                    <td></td>
                    <td></td>
                    <td><button onClick={addCategory}>Add Category</button></td>
                </tr>
            </tfoot>
        </table>
    </>);
}

export default AdminCategory;