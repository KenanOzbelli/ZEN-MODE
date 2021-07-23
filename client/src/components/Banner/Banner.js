import React from 'react'
import './Banner.css'

const Banner = (props) => (
    <div className="bg-light mb-5 position-relative Banner-container">
        <img className="img-fluid" src={props.src} alt={`${props.title} Background`}/>
        <h1 className="text-light Banner-title">{props.title}</h1>
    </div>
)


export default Banner