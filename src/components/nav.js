import { useState, useEffect } from "react";
import './nav.css'
import Aos from 'aos';
import 'aos/dist/aos.css'


function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (

        <div className="nav-container" >
            <nav>
                <ul>
                    <div className="logo-containr">
                        <h1>protfolio</h1>
                    </div>
                    <div className="responsive-div" >
                    </div>
                    <div className={`nav-options ClassForResponsive ${isOpen && "open"}`}>
                        <div className="nav-options-container">

                            <li onClick={() => setIsOpen(!isOpen)}>
                                {/* <a style={{ textDecoration: 'none', color: 'black' }} href="#home-section" address="true"> home</a> */}
                                home
                            </li>
                            <li onClick={() => setIsOpen(!isOpen)}>
                                {/* <a style={{ textDecoration: 'none', color: 'black' }} href="#about-me-container" address="true"> about</a> */}
                                about
                            </li>
                            <li onClick={() => setIsOpen(!isOpen)}>
                                {/* <a href="#skills-section">skills</a> */}
                                skills
                            </li>
                            <li onClick={() => setIsOpen(!isOpen)}>
                                services
                            </li>
                            <li onClick={() => setIsOpen(!isOpen)}>
                                protfolio
                            </li>
                            <li onClick={() => setIsOpen(!isOpen)}>
                                contact me
                            </li>
                            {/* <li className="mood" onClick={() => setIsOpen(!isOpen)}>
                                <TfiShine />
                            </li> */}
                        </div>
                    </div>
                    <div className={`nav-toggle ${isOpen && "open"}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="bar"></div>
                    </div>
                </ul>

            </nav>
        </div >

    )
}
export default Nav;