import React from 'react'
import "../../../../app/Fonts/typograhy.css"
import "../../../../pages/HomePage/UI/Season/Season.css"
import "../../../../shared/UI/line.css"
import "./NewItems.css"
import Card from '../../../../widgets/Card/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'


function NewItems() {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        axios("http://192.168.31.250:8000/base/")
        .then((responce) =>{
            console.log(responce.data);
            setData(responce.data);
        })
        .catch((error) =>{
            console.log(error);
        });
    }, []);
    return (
        <div className='NewItems'>
            <div className='center'>
                <h3 className='Playfair white title'>НОВЫЕ ПОСТУПЛЕНИЯ</h3>
                <div className='line'></div>
            </div>
            <div className='margin'></div>
            <br />
            <div className='cards-catalog'>
                {
                    data.map(item =>{
                        return <Card key={item.id} item={item}/>
                        
                    })
                }
            </div>
            {/* <div className='cards-catalog'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div> */}
        </div>
    )
}

export default NewItems
