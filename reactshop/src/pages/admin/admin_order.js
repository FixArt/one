import './admin_category.css';
import { useState, useEffect } from "react";

function AdminOrder() {
    const [orders, setOrders] = useState([]);
    const [newDestination, setNewDestination] = useState("");
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/orders')
            .then(response => response.json())
            .then(json => setOrders(json))
    }, []);

    const nullIfEmpty = (given) => {
        if(given === null || given === undefined) return null;
        if(given.length > 0) return given;
        else return null;
    }

    const addOrder = () => {
        const destination = nullIfEmpty(newDestination.trim());
        if (destination) {
            fetch('http://127.0.0.1:8000/api/orders', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json; charset = utf-8"
                },
                body: JSON.stringify({
                    destination
                })
            })
                .then(response => response.json())
                .then(json => {
                    setOrders([...orders, json]);
                    setNewDestination("");
                })
        }
    };
    const updateCategory = (id) => {
        const category = orders.find(category => category.id === id);
        fetch(`http://127.0.0.1:8000/api/orders/${id}`, {
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
        fetch(`http://127.0.0.1:8000/api/orders/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(() => {
                setOrders(orders.filter(painting => painting.id !== id))
            })
    };
    const onChangeHandler = (id, key, value) => {
        setOrders(values => {
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
                    <th>Destination</th>
                    <th>Is completed</th>
                    <th>Painting</th>
                    <th>Upload date</th>
                    <th>Update date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(category => (<tr key={category.id}>
                    <td>
                        <input type="text" maxLength={128} value={category.name ?? ""} onChange={e => onChangeHandler(category.id, "name", e.target.value)} />
                    </td>
                    <td>
                        <input type="text" maxLength={128} value={category.name ?? ""} onChange={e => onChangeHandler(category.id, "name", e.target.value)} />
                    </td>
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
                    <td><input type='text' value={newDestination} onChange={(e) => setNewDestination(nullIfEmpty(e.target.value))}></input></td>
                    <td></td>
                    <td></td>
                    <td><button onClick={addOrder}>Add Destination</button></td>
                </tr>
            </tfoot>
        </table>
    </>);
}

export default AdminOrder;