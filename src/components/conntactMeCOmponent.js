import './connectMe.css'
import image from '../assets/JavaScript frameworks-amico.png'
import { AiOutlineSend } from 'react-icons/ai';
const Connectme = () => {
    return (
        <section id="connect-me-section">
            <div className="connect-me-parent">

                <div className="connect-me-text">
                    <h1>You have a new project</h1>
                    <p>Connect me now and get 40% discount on your<br /> new project.</p>
                    <button> Connect Me <span><AiOutlineSend /></span></button>
                </div>
                <div className="connect-me-image">
                    <img src={image} />
                </div>
            </div>
        </section>
    )
}
export default Connectme