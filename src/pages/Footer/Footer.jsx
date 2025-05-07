import './Footer.css';
import facebook from './icon/facebook.png';
import github from './icon/github.png';
import instagram from './icon/inst.png';
import linkedin from './icon/linkedin.png';

function Footer() {
    const socialLinks = [
        {
            icon: facebook,
            url: "https://facebook.com/your-profile",
            alt: "Facebook"
        },
        {
            icon: github,
            url: "https://github.com/your-profile",
            alt: "GitHub"
        },
        {
            icon: instagram,
            url: "https://instagram.com/your-profile",
            alt: "Instagram"
        },
        {
            icon: linkedin,
            url: "https://linkedin.com/in/your-profile",
            alt: "LinkedIn"
        }
    ];

    return (
        <footer className="footer">
            <div className="social-links">
                {socialLinks.map((social, index) => (
                    <a 
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={social.icon} 
                            alt={social.alt}
                            className="social-icon"
                        />
                    </a>
                ))}
            </div>
            <p className="footer-text">© 2024 Harsha. All rights reserved.</p>
        </footer>
    );
}

export default Footer;