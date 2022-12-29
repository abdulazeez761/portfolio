import './about.css'
import aboutImage from '../assets/about-us.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const AboutMe = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (
        <section id="about-me-container">
            <div className='about-header' >
                <h1 >about me</h1>
            </div>
            <div className='about-content-container'>
                <div className='about-image-container' >
                    <img src={aboutImage} alt='my pic' />
                </div>
                <div className='about-text-container' >
                    <p>
                        A web devloper, with extensive knowledge and yeares of experience, working in web technologies in both sides back end and, front end , and ui / ux design, delivering quality work.
                    </p>
                    <ul>
                        <li>
                            <h2>04+</h2>
                            <span>yeares experience</span>
                        </li>
                        <li>
                            <h2>20+</h2>
                            <span>completed projeects</span>
                        </li>
                        <li>
                            <h2>05+</h2>
                            <span>compaines work</span>
                        </li>
                    </ul>
                    <button className='donload-cv-button'>download cv </button>
                </div>
            </div>
        </section>
    )
}
export default AboutMe