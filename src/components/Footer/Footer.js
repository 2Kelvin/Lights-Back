import './Footer.css';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <small>Built by Kelvin Njihia</small><br/>
            <small>{new Date().getFullYear()}</small>
            <div className='socialIconsDiv'>
                <FaGithubSquare className='footerIcon' />
                <FaLinkedin className='footerIcon' />
            </div>
        </footer>
    );
}