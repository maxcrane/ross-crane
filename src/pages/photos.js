import React from 'react'
import Link from 'gatsby-link'
import cat from '../images/cat.jpg';

const Photos = () => (
    <div>
        <p>These are photos</p>
        <img src={cat} style={{maxHeight: "300px"}}/>
    </div>
)

export default Photos
