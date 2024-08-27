import React from 'react'
// import watch from "../../shared/icons/watch.png"
import "./Card.css"


function Card({item}) {
    
    
    return (
        <div className='card'>
            <div className='img-frame'>
                <img className='img-large' src={item.image} alt="часы" />
            </div>
            <p className='Playfair white first post-title'>{item.title}</p>
            <p className='Playfair white second post-title'>{item.description}</p>
        </div>
    )
}

export default Card