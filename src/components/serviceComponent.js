import './service.css'
import { CgIfDesign } from 'react-icons/cg';
import { BsFileEarmarkCode } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import { MdOutlineDesignServices } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useState, useContext, useEffect } from 'react';
import useBlure from '../hooks/useBlure';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Service = () => {

    const { blure, SetBlure } = useBlure()

    const [designInfo, setDesignInfo] = useState(false)
    const [developerInfo, setDeveloperInfo] = useState(false)
    const [birandingInfo, setBrandingInfo] = useState(false)
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section id='service-section' >
            <div className='service-header'>
                <h1>Services</h1>
                <p>What I offer</p>
            </div>
            <div className='services-type'>
                <div className='service'>
                    <span>
                        <CgIfDesign />
                    </span>
                    <h1>Ui/Ux <br></br>Designer</h1>
                    <button onClick={() => {
                        setBrandingInfo(false)
                        setDeveloperInfo(false)
                        setDesignInfo(true)
                        SetBlure(true)
                    }}>View More <strong><BsArrowRightShort /></strong></button>
                </div>
                <div className='service'>
                    <span>
                        <BsFileEarmarkCode />
                    </span>
                    <h1>Frontend Developer</h1>
                    <button onClick={() => {
                        setBrandingInfo(false)
                        setDeveloperInfo(true)
                        setDesignInfo(false)
                        SetBlure(true)
                    }}>View More <strong><BsArrowRightShort /></strong></button>
                </div>
                <div className='service'>
                    <span><MdOutlineDesignServices /></span>
                    <h1>Branding Designer</h1>
                    <button onClick={() => {
                        setBrandingInfo(true)
                        setDeveloperInfo(false)
                        setDesignInfo(false)
                        SetBlure(true)
                    }}>View More <strong><BsArrowRightShort /></strong></button>
                </div>
            </div>
            <div className='service-offer-info' style={{ display: designInfo === false && developerInfo === false && birandingInfo === false ? 'none  ' : 'block', }}>
                <div className='offer-info-header'>
                    <h1>{designInfo === true ? 'Ui/Ux Designer' : developerInfo === true ? 'Frontend Developer' : birandingInfo === true ? 'Branding Designer' : ''}</h1>
                    <h1 className='close-icon' onClick={() => {
                        setBrandingInfo(false)
                        setDeveloperInfo(false)
                        setDesignInfo(false)
                        SetBlure(false)
                    }}> <CgClose /></h1>
                </div>
                <div className='offer-info-contnt'>
                    {designInfo === true ? (
                        <ul className='offer-info-option-continer'>
                            <li>
                                <span><AiOutlineCheckCircle /></span> I develop the user interface.
                            </li>
                            <li>
                                <span><AiOutlineCheckCircle /></span>  Web page development style.
                            </li>
                            <li>
                                <span><AiOutlineCheckCircle /></span>  I create ux element interface.
                            </li>
                            <li>
                                <span><AiOutlineCheckCircle /></span>  I postion your computer brand.
                            </li>
                        </ul>

                    ) : developerInfo === true ?
                        (
                            <ul className='offer-info-option-continer'>
                                <li>
                                    <span><AiOutlineCheckCircle /></span> I develop the user interface.
                                </li>
                                <li>
                                    <span><AiOutlineCheckCircle /></span>I develop responsive Web page.
                                </li>
                                <li>
                                    <span><AiOutlineCheckCircle /></span>  I use programming languages.
                                </li>
                                <li>
                                    <span><AiOutlineCheckCircle /></span>  I use logic and algorithems.
                                </li>
                            </ul>
                        )
                        : birandingInfo === true ? (
                            <ul className='offer-info-option-continer'>
                                <li>
                                    <span><AiOutlineCheckCircle /></span> I develop the user interface.
                                </li>
                                <li>
                                    <span><AiOutlineCheckCircle /></span>I develop responsive Web page.
                                </li>
                                <li>
                                    <span><AiOutlineCheckCircle /></span>  I use programming languages.
                                </li>
                            </ul>
                        ) : ''}

                </div>
            </div>
        </section>
    )
}

export default Service