import React from 'react'
import './Home.css'
import img1 from './img/IMG_3135.jpeg'
import img2 from './img/IMG_3137.jpeg'

const Home = () =>{
    return(
        <>
        <div className="columns">
            <figure>
                <img src={img1} />
                <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
            </figure>
            <figure>
                <img src={img2} />
                <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
            </figure>
            <figure>
                <img src={img1} />
                <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
            </figure>
            <figure>
                <img src={img2} />
                <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
            </figure>
            <figure>
                <img src={img1} />
                <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
            </figure>
            <figure>
                <img src={img2} />
                <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
            </figure>
            <figure>
                <img src={img1} />
                <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
            </figure>
            <figure>
                <img src={img2} />
                <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
            </figure>
        </div>
        </>
    )
}

export default Home