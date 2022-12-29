import './qualifecations.css'
import { useState, useEffect } from 'react'
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { SlCalender } from "react-icons/sl";
const Qualifecations = () => {
    const [activeEducation, setActiveEducation] = useState(true)
    const [activeWork, setActiveWork] = useState(false)
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section id='qualifecations-section' >
            <div className='qualifecations-conttainer'>
                <h1>Qualifecations</h1>
                <div className='qualifecations-content-conttainer'>
                    <div className='qualifecations-headder'>
                        <h2 className={activeEducation ? 'active-education-option' : 'not-active-education'} onClick={() => {
                            setActiveEducation(true)
                            setActiveWork(false)
                        }}><span><MdCastForEducation /> </span>Education</h2>
                        <h2 className={activeWork ? 'active-work-option' : 'not-active-work'} onClick={() => {
                            setActiveEducation(false)
                            setActiveWork(true)
                        }}><span><MdOutlineWorkOutline /></span> Work</h2>
                    </div>
                    <ul className='education' style={{ display: activeEducation ? '' : 'none' }} >
                        <li>
                            <h3> Computer Engineer</h3>
                            <p>Peru - University</p>
                            <p><span><SlCalender /> </span>2009 - 2004</p>
                        </li>
                        <li>
                            <h3>Web Design</h3>
                            <p>Spain - Institute</p>
                            <p><span><SlCalender /> </span>2014 - 20017</p>
                        </li>
                        <li>
                            <h3>Web Development</h3>
                            <p>peru - Institute</p>
                            <p><span><SlCalender /> </span>2017 - 2019</p>
                        </li>
                        <li>
                            <h3>Master Ui/Ux</h3>
                            <p>Peru - Institute</p>
                            <p><span><SlCalender /> </span>2019 - 2021</p>
                        </li>
                    </ul>
                    <ul className='work' style={{ display: activeWork ? '' : 'none' }}>
                        <li>
                            <h3> Computer Engineer</h3>
                            <p>Microsoft - Peru</p>
                            <p><span><SlCalender /> </span>2016 - 2018</p>
                        </li>
                        <li>
                            <h3>Frontend Developer</h3>
                            <p>Apple Inc - Spain</p>
                            <p><span><SlCalender /> </span>2018 - 2019</p>
                        </li>
                        <li>
                            <h3>Ui Designer</h3>
                            <p>Figma - Spain</p>
                            <p><span><SlCalender /> </span>2019 - 2022</p>
                        </li>

                    </ul>
                </div>
                <div className='education-line' style={{ display: activeEducation ? '' : 'none' }} >
                </div>
                <div className='work-line' style={{ display: activeWork ? '' : 'none' }} >
                </div>
            </div>
        </section>
    )
}

export default Qualifecations