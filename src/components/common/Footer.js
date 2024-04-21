import { Link } from "react-router-dom";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icons">
                <Link
                    to=""
                    className="footer-icon">
                    <BiLogoInstagramAlt />
                </Link>
                <Link
                    to=""
                    className="footer-icon">
                    <BsFacebook />
                </Link>
                <Link
                    to=""
                    className="footer-icon">
                    <AiFillTwitterCircle />
                </Link>
            </div>
            <div className="nav-container">
                <Link
                    to="/"
                    className="footer-nav-item">
                    Home
                </Link>
                <Link
                    to="/library"
                    className="footer-nav-item">
                    Library
                </Link>
                <Link
                    to="/about"
                    className="footer-nav-item">
                    About
                </Link>
                <Link
                    to="/terms"
                    className="footer-nav-item">
                    Terms
                </Link>
                <Link
                    to="/privacy"
                    className="footer-nav-item">
                    Privacy Policy
                </Link>
            </div>
            <p className="copy-right">© 2024 Quizopolis. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;
