import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Socials from '../Socials-Bar/Socials';
import MenuMobile from './Menu';

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header>
            {windowWidth > 800 ? (
                <>
                    <div className="top-header">
                        <section className="logo-and-icon">
                            <h1>MAGUBO</h1>
                            <p>Empowering your solar journey with innovative solutions that harness the power of the sun.</p>
                        </section>

                        <section className="contact-and-link">
                            <p>Contact Us</p>
                            <p>Makhiwane</p>
                        </section>
                    </div>

                    <div className="bottom-header">
                        <section className="navigation">
                            <ul aria-label='magubo desktop navigation'>
                                <li>
                                    <a href="#" onClick={() => navigate("./")}>Home</a>
                                </li>
                                <li>
                                    <a href="#" onClick={() => navigate("./services")}>Products</a>
                                </li>
                                <li>
                                    <Link to="/#contact-us">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/#about-us">About Us</Link>
                                </li>
                            </ul>
                        </section>
                        <section className="makhiwane-link">
                            {/* Additional content can go here */}
                        </section>
                    </div>
                </>
            ) : (
                <div className="top-header">
                    <section className="logo-and-icon">
                        <h1>MAGUBO</h1>
                        <p>Empowering your solar journey with innovative solutions that harness the power of the sun.</p>
                    </section>
                    <MenuMobile />
                </div>
            )}
        </header>
    );
};

export default Header;
