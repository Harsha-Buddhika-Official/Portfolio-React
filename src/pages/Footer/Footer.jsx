import './Footer.css';
import facebook from './icon/facebook.png';
import github from './icon/github.png';
import instagram from './icon/inst.png';
import linkedin from './icon/linkedin.png';

function Footer() {
    const socialLinks = [
        {
            icon: linkedin,
            url: "https://www.linkedin.com/in/harsha-buddhika/",
            alt: "LinkedIn"
        },
        {
            icon: facebook,
            url: "https://www.facebook.com/harsha.buddika.5623",
            alt: "Facebook"
        },
        {
            icon: github,
            url: "https://github.com/Harsha-Buddhika-Official",
            alt: "GitHub"
        },
        {
            icon: instagram,
            url: "https://www.instagram.com/m_r_harsha/",
            alt: "Instagram"
        },
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