import './getInTouch.css'
import { BsTelephoneOutbound } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';


const GetInTouch = () => {
    return (
        <section className='get-in-touch-section'>
            <h1 className='get-in-touch-title'>Get In Touch</h1>
            <div className='get-in-touch-container'>
                <div className='connection-containner'>
                    <div className='connection-info-container'>
                        <div className='connection-icon-container'>
                            <span><BsTelephoneOutbound /></span>
                        </div>
                        <div className='connection-info'>
                            <h1>Call Me</h1>
                            <p>+962797974475</p>
                        </div>
                    </div>
                    <div className='connection-info-container'>
                        <div className='connection-icon-container'>
                            <span><HiOutlineMail /></span>
                        </div>
                        <div className='connection-info'>
                            <h1>Email</h1>
                            <p>abd828981@gmail.com</p>
                        </div>
                    </div>
                    <div className='connection-info-container'>
                        <div className='connection-icon-container'>
                            <span><HiOutlineLocationMarker style={{ color: "#6E57E0" }} /></span>
                        </div>
                        <div className='connection-info'>
                            <h1>Location</h1>
                            <p>Jordan - Irbid</p>
                        </div>
                    </div>
                </div>
                <div className='connectoin-form-container'>
                    <textarea name="Name" className='connectoin-form-name' placeholder='Name' rows="4" cols="30" />
                    <textarea name="Email" className='connectoin-form-email' placeholder='Email' rows="4" cols="30" />
                    <textarea name="Project" className='connectoin-form-project' placeholder='Project' Email rows="4" cols="90" />
                    <textarea name="Message" className='connectoin-form-message' placeholder='Message' rows="10" cols="50" />
                </div>
            </div>
        </section>
    )
}
export default GetInTouch