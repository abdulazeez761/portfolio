import { AiOutlineStar } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './testmonial.css'
import image1 from '../assets/testimonial2.jpg'
import image2 from '../assets/testimonial3.jpg'
import image3 from '../assets/Wavy Buddies - Out of Stock.png'
import image4 from '../assets/Family Values - Avatar.png'
import image5 from '../assets/Città - Avatar.png'
import image6 from '../assets/Dizzy face-pana.png'
import { useState, useEffect } from 'react';
const Testmonial = () => {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="testmonial-section">
            <div className="testmonial-header">
                <h1>Testimonial</h1>
            </div>
            <div></div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                slidesPerView={windowDimensions.width <= 768 ? 1 : 2}

                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className='testmonial-swiper'

            >
                <SwiperSlide className='testmonial-SwiperSlide'>
                    <div className='testmonial-body'>
                        <img src={image1} />
                        <div className='text-container'>
                            <h1>Osama zain</h1>
                            <p>Client</p>
                        </div>
                        <div className='starts-container'><AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /><AiOutlineStar /></div>
                    </div>
                    <div className='testomnial-describtion'>
                        <p>
                            I get a good imptrssion,I carry out my project with all possible quality and attintioen and support 24 hours a day.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='testmonial-SwiperSlide'>
                    <div className='testmonial-body'>
                        <img src={image2} />
                        <div className='text-container'>
                            <h1>Ahmad Kahlid</h1>
                            <p>Client</p>
                        </div>
                        <div className='starts-container'><AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /><AiOutlineStar /></div>
                    </div>
                    <div className='testomnial-describtion'>
                        <p>
                            I get a good imptrssion,I carry out my project with all possible quality and attintioen and support 24 hours a day.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='testmonial-SwiperSlide'>
                    <div className='testmonial-body'>
                        <img src={image3} />
                        <div className='text-container'>
                            <h1>Ibrahim Ahmad</h1>
                            <p>Client</p>
                        </div>
                        <div className='starts-container'><AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /><AiOutlineStar /></div>
                    </div>
                    <div className='testomnial-describtion'>
                        <p>
                            I get a good imptrssion,I carry out my project with all possible quality and attintioen and support 24 hours a day.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='testmonial-SwiperSlide'>
                    <div className='testmonial-body'>
                        <img src={image4} />
                        <div className='text-container'>
                            <h1>Hudhayfa </h1>
                            <p>Client</p>
                        </div>
                        <div className='starts-container'><AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /><AiOutlineStar /></div>
                    </div>
                    <div className='testomnial-describtion'>
                        <p>
                            I get a good imptrssion,I carry out my project with all possible quality and attintioen and support 24 hours a day.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='testmonial-SwiperSlide'>
                    <div className='testmonial-body'>
                        <img src={image5} />
                        <div className='text-container'>
                            <h1>Yunus zain</h1>
                            <p>Client</p>
                        </div>
                        <div className='starts-container'><AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /><AiOutlineStar /></div>
                    </div>
                    <div className='testomnial-describtion'>
                        <p>
                            I get a good imptrssion,I carry out my project with all possible quality and attintioen and support 24 hours a day.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='testmonial-SwiperSlide'>
                    <div className='testmonial-body'>
                        <img src={image6} />
                        <div className='text-container'>
                            <h1>Abdulaziz</h1>
                            <p>Client</p>
                        </div>
                        <div className='starts-container'><AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /><AiOutlineStar /></div>
                    </div>
                    <div className='testomnial-describtion'>
                        <p>
                            I get a good imptrssion,I carry out my project with all possible quality and attintioen and support 24 hours a day.
                        </p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}

export default Testmonial