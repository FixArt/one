import React, { useState } from 'react';
import './order.css';

function Order(props)
{
    const [selectedOption, setSelectedOption] = useState("creditCard");

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (<>
        <h1 className="paymentTitle">Оплата</h1>
        <div className="order_form_wrapper">
        <form className='order_form'>
            <div className='order_form_section inline_section'>
                <label for="paymentOptionSelect">Спосіб оплати</label>
                <select id="paymentOptionSelect" name="paymentOption" onChange={handleSelectChange}>
                    <option value="creditCard">кредитною карткою</option>
                    <option value="manual">вручну</option>
                </select>
            </div>
            <div className={`order_form_section ${selectedOption === "creditCard" ? "" : "hidden"}`}>
                <div className="inline_section">
                    <label for="ownerInput">Власник</label>
                    <input id="ownerInput" name="owner" type="text" />
                </div>
                <div className="inline_section">
                    <label for="creditCardInput">Номер кредитної картки</label>
                    <input id="creditCardInput" name="creditCard" title="Номер кредитної картки" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx"/>
                </div>
                <div className="inline_section">
                    <label for="cvvInput">CVV</label>
                    <input id="cvvInput" name="cvv" type="tel" title="CVV-код" max="999" pattern="([0-9]|[0-9]|[0-9])" autocomplete="cc-number" maxlength="3" placeholder="xxx"/>
                </div>
            </div>
            <div className={`order_form_section inline_section ${selectedOption === "manual" ? "" : "hidden"}`}>
                <label for="temporaryCodeInput">Тимчасовий код оплати</label>
                <input id="temporaryCodeInput" name="temporaryCode" type="number" inputmode="numeric"/>
            </div>
            <button type="submit">Оплатити</button>
        </form>
        </div>
    </>);
}

export default Order;