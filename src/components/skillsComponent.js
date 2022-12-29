import './skills.css'
// import { BiCodeCurly } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { BsServer } from "react-icons/bs";
import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
const SkillsComponent = () => {
    const [frontEndToggel, setFrontEndToggel] = useState(false)
    const [designToggel, setDesignToggel] = useState(false)
    const [backEndToggel, setBackEndToggel] = useState(false)
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    const openSkillFrontEnd = () => {
        setFrontEndToggel(!frontEndToggel)
        setDesignToggel(false)
        setBackEndToggel(false)
    }
    const openSkillBackEnd = () => {
        setFrontEndToggel(false)
        setDesignToggel(false)
        setBackEndToggel(!backEndToggel)
    }
    const openSkillDesign = () => {
        setFrontEndToggel(false)
        setDesignToggel(!designToggel)
        setBackEndToggel(false)
    }
    return (
        <section id='skills-section'>
            <div className='skills-container' id='skills-section'>
                <div className='skills-header'>
                    <h1 >skills</h1>
                </div>
                <div className='skills-sections-conainer' >
                    <div className='skills-content-container' >
                        <div className={frontEndToggel ? 'skill opend' : 'skill notOpend'} onClick={() => {
                            openSkillFrontEnd()
                        }} >
                            <div className='skikll-icon'>
                                <BiCodeAlt />
                            </div>
                            <div className='skill-content'>
                                <h1>Frontend devlopment </h1>
                                <p>More than 4 yeares </p>
                                <div className={frontEndToggel ? 'front-end-skill-type show-skills skill-type' : 'front-end-skill-type hide-skills skill-type'} >
                                    <div>
                                        <p>Html<span>90%</span></p>
                                        <div class="bar-container">
                                            <div class="skill-bar html"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Css <span>85%</span></p>
                                        <div class="bar-container">
                                            <div class="skill-bar css"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Javascript<span>80%</span></p>
                                        <div class="bar-container">
                                            <div class="skill-bar javascript"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>React<span>75%</span></p>
                                        <div class="bar-container">
                                            <div class="skill-bar react"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Angular<span>50%</span></p>
                                        <div class="bar-container">
                                            <div class="skill-bar angular"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={designToggel ? 'skill opend design' : 'skill notOpend design'} onClick={() => {
                            openSkillDesign()
                        }} >
                            <div className='skikll-icon'>
                                <BiCodeAlt />
                            </div>
                            <div className='skill-content'>
                                <h1>Designer</h1>
                                <p>More than 5 yeares</p>
                                <div className={designToggel ? 'design-skill-type show-skills skill-type' : 'design-skill-type hide-skills skill-type'} >
                                    <div>
                                        <p>Figma <span>90%</span></p>
                                        <div className="bar-container">
                                            <div className="skill-bar figma"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Scetch <span>80%</span></p>
                                        <div className="bar-container">
                                            <div className="skill-bar scetch"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Photo shop<span>70%</span></p>
                                        <div className="bar-container">
                                            <div className="skill-bar photoshop"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={backEndToggel ? 'skill opend' : 'skill notOpend'} onClick={() => {
                            openSkillBackEnd()
                        }} >
                            <div className='skikll-icon'>
                                <BsServer />
                            </div>
                            <div className='skill-content'>
                                <h1>Backend devlopment</h1>
                                <p>More than 2 yeares </p>
                                <div className={backEndToggel ? 'back-end-skill-type show-skills skill-type' : 'back-end-skill-type hide-skills skill-type'} >

                                    <div>
                                        <p>Node.js <span>85%</span></p>
                                        <div className="bar-container">
                                            <div className="skill-bar nodejs"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Javascript<span>80%</span></p>
                                        <div class="bar-container">
                                            <div class="skill-bar javascript"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Php<span>80%</span></p>
                                        <div className="bar-container">
                                            <div className="skill-bar php"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Python<span>75%</span></p>
                                        <div class="bar-container">
                                            <div class="skill-bar python"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Sql<span>70%</span></p>
                                        <div className="bar-container">
                                            <div className="skill-bar sql"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}
export default SkillsComponent