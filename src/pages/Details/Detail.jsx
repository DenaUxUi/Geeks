import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Topline from '../../widgets/topline/topline'
import Header from './../../widgets/header/Header';
import Footer from '../../widgets/Footer/Footer';
import "./Details.css"
import Button from '../../shared/UI/Button/Button';
import "./../../app/Fonts/typograhy.css"

function Detail() {
    const [data, setData] = useState([]); 

    useEffect(() => {
        axios("http://192.168.31.250:8000/base/")
            .then((response) => {
                console.log(response.data);
                setData(response.data); 
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Topline />
            <Header />
            <div className='background flex-content-row'>
                {
                    data.map(item => (
                        <div key={item.id} className='flex-content-row'> 
                            <img className='details-image' src={item.image} alt="картинка" />
                            <div className='flex-content-column'>
                                <h1 className='white'>{item.title}</h1>
                                <br />
                                <p>{item.description}</p>
                                <br />
                                <Button>Положить в корзину</Button>
                            </div>  
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Detail;
