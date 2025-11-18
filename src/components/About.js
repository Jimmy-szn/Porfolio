// Create your About component here
import IMG from '../assets/Jeep.jpg';
const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About me</h1>
            <div className="about-info">
                    <p className="about-desc">
                        Kimotho is a passionate 3rd year student at Strathmore University, pursuing a Bachelors in Informatics and Computer Science. He specializes in mobile app development (Flutter, Kotlin), cybersecurity, and software engineering. Beyond academics, Kimotho is deeply interested in photography, UI/UX design, and web development.<br /><br />
                        <strong>Main Projects:</strong>
                        <ul style={{textAlign: 'left', marginLeft: '2em'}}>
                            <li>
                                <strong>Mjifarms</strong> – A farm management app for smallholder farmers. <a href="https://github.com/Jimmy-szn/mjifarms" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </li>
                            <li>
                                <strong>ChamaLink</strong> – A digital platform for managing savings groups (chamas). <a href="https://github.com/Jimmy-szn/chamalink" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </li>
                            <li>
                                <strong>End-to-End Encrypted Chat Client</strong> – Secure messaging app with modern encryption. <a href="https://github.com/Jimmy-szn/encrypted-chat-client" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </li>
                        </ul>
                    </p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective" />
                    </div>

                </div>


            </div>

        </div>
    )
}
export default About;