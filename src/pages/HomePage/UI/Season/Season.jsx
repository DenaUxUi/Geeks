import React from 'react'
import "../../../../app/Fonts/typograhy.css"
import "./Season.css"
import "../../../../shared/icons/icon.css"
import "../../../../shared/UI/line.css"
import Button from './../../../../shared/UI/Button/Button';
import Card from '../../../../widgets/Card/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Season() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios("http://192.168.31.250:8000/base/")
            .then((responce) => {
                console.log(responce.data);
                setData(responce.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className='season-block'>
            <div className='new-season'>
                <div className='center'>
                    <h3 className='Playfair white title'>СЕЗОН 2020/21</h3>
                    <div className='line'></div>
                </div>
                <div className='cards'>
                    {
                        data.map(item => {
                            return <Card className="img-large" key={item.id} item={item} />

                        })
                    }
                </div>
            </div>
            <div className='new-season-img'>
                <div className='center'>
                    <h3 className='Playfair white title'>НОВАЯ КОЛЛЕКЦИЯ</h3>
                    <div className='line'></div>
                    <Button>КАТАЛОГ</Button>

                </div>
            </div>
        </div>
    )
}

export default Season
