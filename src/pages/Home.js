import React from 'react'
import './Home.css'
import img1 from './img/IMG_3135.jpeg'
import img2 from './img/IMG_3137.jpeg'
import img3 from './img/IMG_3167.jpeg'

const Home = ({history}) =>{

    /*
        const list = {
        i
        }
    */
    const handleClick = () =>{
        history.push("/User")
    }
    return(
        <>
        <div className="columns">
            <figure onClick={handleClick}>
                <img src={img1} alt="img"/>
                <figcaption>이미지 클릭시 게시물로 이동</figcaption>
            </figure>
            <figure>
                <img src={img2} alt="img"/>
                <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
            </figure>
            <figure>
                <img src={img3} alt="img"/>
                <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
            </figure>
            <figure>
                <img src={img3} alt="img"/>
                <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
            </figure>
            <figure>
                <img src={img1} alt="img"/>
                <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
            </figure>
            <figure>
                <img src={img2} alt="img"/>
                <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
            </figure>
            <figure>
                <img src={img1} alt="img"/>
                <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
            </figure>
            <figure>
                <img src={img2} alt="img"/>
                <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
            </figure>
        </div>
        </>
    )
}

export default Home