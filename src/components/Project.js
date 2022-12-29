import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { AiOutlineArrowRight } from 'react-icons/ai';

import './project.css'
import image1 from '../assets/portfolio1.jpg';
import image2 from '../assets/portfolio2.jpg';
import image3 from '../assets/portfolio3.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Project = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <section className='slider-container'>
            <h1>Protfolio</h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                navigation={true}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <div className='sledes-parent'>


                    <SwiperSlide>
                        <div className='slide-content-container'>
                            <div className='project-image-container'>
                                <img src={image1} />
                            </div>
                            <div className='project-text-container'>
                                <h1>Modren Websites</h1>
                                <p>Websites adaptable to all devices, with ui comonents and animted interaction</p>
                                <button className='demo-button'>Demo <span><AiOutlineArrowRight /></span></button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-content-container' >
                            <div className='project-image-container'>
                                <img src={image2} />
                            </div>
                            <div className='project-text-container'>
                                <h1>Modren Websites</h1>
                                <p>Websites adaptable to all devices, with ui comonents and animted interaction</p>
                                <button className='demo-button'>Demo <span><AiOutlineArrowRight /></span></button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-content-container'>
                            <div className='project-image-container'>
                                <img src={image3} />
                            </div>
                            <div className='project-text-container'>
                                <h1>Modren Websites</h1>
                                <p>Websites adaptable to all devices, with ui comonents and animted interaction</p>
                                <button className='demo-button'>Demo <span><AiOutlineArrowRight /></span></button>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>

        </section >
    )
}

export default Project;