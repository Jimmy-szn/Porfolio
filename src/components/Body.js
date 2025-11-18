// Create your Body component here
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from '../assets/JimmyIcon.jpg';
const Body = () => {
    return (

        < div id="body" className="body" >
            <div className="body-container">
                <div className="body-profile"><img className="body-img" alt="avatar" src={Avatar} />
                    <div className="body-content">
                        <div className="body-headline">
                           Kimotho Jimmy Kariuki
                        </div>
                        <div className="body-text">
                            ComputerScientist /Mobile Developer / Cybersecurity Enthusiast
                        </div>
                    </div>
                    <div className="body-icons">

                        <a href="https://github.com/Jimmy-szn" target="_blank" rel="noreferrer" className="icon-blink"><i>< FaGithub /></i></a>
                        <a href="https://www.linkedin.com/in/jimmy-kariuki-107a2925b" target="_blank" rel="noreferrer" className="icon-blink"><i><FaLinkedin /></i></a>

                    </div>
                </div>
            </div >


        </div>
    )}

export default Body;