export function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <a href="#home" className="logo">
                        <img
                            src="/logo.png"
                            alt="Jacqueline Official Hairstyle Logo"
                            className="logo-image"
                        />
                        <span className="logo-text">Jacqueline Official Hairstyle</span>
                    </a>
                    <ul className="nav-links">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#services">Diensten</a>
                        </li>
                        <li>
                            <a href="#about">Over Ons</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
