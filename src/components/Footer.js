import './Footer.css';

import githubIMG from "../assets/icons/github-svgrepo-com.svg";
import myPageIMG from "../assets/icons/web-svgrepo-com.svg";
import linkedinIMG from "../assets/icons/linkedin-svgrepo-com.svg";
import emailIMG from "../assets/icons/email-svgrepo-com.svg";

export default function Footer() {
    return(
        <footer>
            <div id="git-content-footer">
            <a id="github-link" className="personalLinks" href="https://github.com/Mangostar1" target="_blank" rel="noopener noreferrer">
                <img src={githubIMG} className="github" id="github" title="GitHub" alt="my github" />
            </a>
        </div>
        <div id="miweb-content-footer">
            <a id="my-web" className="personalLinks" href="https://omar-zavala.xyz" target="_blank" rel="noopener noreferrer">
                <img src={myPageIMG} className="github" id="miweb" title="omar-zavala.xyz" alt="my web" />
            </a>
        </div>
        <div id="linkedin-content-footer">
            <a href="https://www.linkedin.com/in/omar-zavala-ugarte-7b5036149/" className="personalLinks" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIMG} className="linkedin" id="linkedin" title="Linkedin" alt="linkedin" />
            </a>
        </div>
        <div id="email-content-footer">
            <a href="mailto:influencia.x.94@gmail.com" className="personalLinks" target="_blank" rel="noreferrer">
                <img src={emailIMG} className="email" id="email" title="e-mail" alt="my gmail" />
            </a>
        </div>
        </footer>
    )
}