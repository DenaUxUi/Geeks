import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Topline from '../../widgets/topline/topline';
import Header from '../../widgets/header/Header';
import Footer from '../../widgets/Footer/Footer';

function Cart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://192.168.31.250:8000/base/")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section>
            <Topline />
            <Header />
            <div className="cart">
                <h2>Корзина</h2>
                {data.length === 0 ? (
                    <p>Ваша корзина пуста</p>
                ) : (
                    <ul>
                        {data.map(item => (
                            <li key={item.id}>
                                <div className="cart-item">
                                    <h3>{item.name}</h3>
                                    <p>Цена: {item.price} ₽</p>
                                    <p>Количество: {item.quantity}</p>
                                    <button>Удалить</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="cart-total">
                    <h3>Итого: {data.reduce((total, item) => total + item.price * item.quantity, 0)} ₽</h3>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Cart;