import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './contact.css';
function Contact() {
    const shown = [50.25402986101728, 28.656892168541294];
    return (<>
        <p className="phoneDisplay"><a href="tel:+3800000000">+3800000000</a></p>
        <div className="contactForm">
            <h2>Зв'яжіться з нами</h2>
            <form>
                <p>
                    <label htmlFor="emailInput">Пошта</label>
                    <input id="emailInput" name="email" type="email" />
                </p>
                <div>
                    <label htmlFor="commentInput" style={{ display: 'block' }}>Коментар</label>
                    <textarea id="commentInput" name="comment" />
                </div>
                <button type="submit">Відправити</button>
            </form>
        </div>
        <div>
            <MapContainer center={shown} zoom={13} scrollWheelZoom={true} style={{ height: "40em" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={shown}>
                    <Popup>
                        Я працюю звідси!
                        <br />
                        Це місце круте, хіба ні?
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    </>);
}

export default Contact;