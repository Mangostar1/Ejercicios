import './Footer.css'

export default function Footer() {
    return(
        <footer>
            <div id="git-content-footer">
            <a id="github-link" class="personalLinks" href="https://github.com/Mangostar1" target="_blank" rel="noopener noreferrer">
                <img src="assets/icons/github-svgrepo-com.svg" class="github" id="github" title="GitHub" alt="my github" />
            </a>
        </div>
        <div id="miweb-content-footer">
            <a id="my-web" class="personalLinks" href="https://omar-zavala.xyz" target="_blank" rel="noopener noreferrer">
                <img src="assets/icons/web-svgrepo-com.svg" class="github" id="miweb" title="omar-zavala.xyz" alt="my web" />
            </a>
        </div>
        <div id="linkedin-content-footer">
            <a href="https://www.linkedin.com/in/omar-zavala-ugarte-7b5036149/" class="personalLinks" target="_blank" rel="noopener noreferrer">
                <img src="assets/icons/linkedin-svgrepo-com.svg" class="linkedin" id="linkedin" title="Linkedin" alt="linkedin" />
            </a>
        </div>
        <div id="email-content-footer">
            <a href="mailto:influencia.x.94@gmail.com" class="personalLinks" target="_blank" rel="noreferrer">
                <img src="assets/icons/email-svgrepo-com.svg" class="email" id="email" title="e-mail" alt="my gmail" />
            </a>
        </div>
        </footer>
    )
}