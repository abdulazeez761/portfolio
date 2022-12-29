import './home.css'
import { useEffect, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import myieldIage from '../assets/home-right.png'
import { BsChevronDoubleDown } from "react-icons/bs";
import { BsMouse } from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const [scrollClass, setScrollClass] = useState('none-scroll')
    setTimeout(() => {
        setScrollClass('show-scroll')
    }, 250)
    return (

        <section id='home-section' >
            <div id='home' className='home-container' >
                <div className='home-text'>
                    <h1 className='h1'>Hi, I'am Abdulaziz</h1>
                    <h3 className='info my-major'>full-stack developer</h3>
                    <p className='info whow-am-i'>
                        High level experience in web devlopment and  a strong knowledg of bot front end, back end , producing high quality work
                    </p>
                    <button className='contact-me-button'>contact me </button>
                    <div className='home-sucial-media'>
                        <ul>
                            <li> <FaGithub /></li>
                            <li> <FaLinkedinIn /></li>
                            <li> <FaBasketballBall /></li>
                        </ul>
                    </div>
                </div>
                <div className='home-image' >
                    <img className='my-image' src={myieldIage} alt='my pic' />
                </div>
                <div className={`scroll-down ${scrollClass}`}>
                    <a href="#about-me-container" address="true"><div><BsMouse /></div>
                        <span>scroll down</span>
                        <div><BsChevronDoubleDown /> </div>
                    </a>
                </div>
            </div>
        </section>



    )
}

export default Home