import React from 'react'
import image from '../images/reactlib2.jpg'

function Homepage() {
    return (
        <div>
            <img src={image} className='photo' alt="library image" />
        </div>
    )
}

export default Homepage