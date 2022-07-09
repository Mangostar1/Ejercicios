import './Header.css';

export default function Header() {
    return(
        <header className="header">
            <nav className="nav">
                <div className="logo-content">
                    <a className="link-logo" href="https://omar-zavala.xyz/">
                        <img src="https://picsum.photos/80/25" />
                    </a>
                </div>
                <ul className="menu">
                    <li className="list"><a className="link" href="#">Inicio</a></li>
                    <li className="list"><a className="link" href="#">Link 2</a></li>
                    <li className="list"><a className="link" href="#">Link 3</a></li>
                </ul>
            </nav>
        </header>
    );
}