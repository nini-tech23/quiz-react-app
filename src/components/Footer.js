import { Link } from "react-router-dom";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footericons">
                <Link
                    to=""
                    className="footericon">
                    <BiLogoInstagramAlt />
                </Link>
                <Link
                    to=""
                    className="footericon">
                    <BsFacebook />
                </Link>
                <Link
                    to=""
                    className="footericon">
                    <AiFillTwitterCircle />
                </Link>
            </div>
            <div className="navcontainer">
                <Link
                    to="/"
                    className="footernavitem">
                    Home
                </Link>
                <Link
                    to="/quiz"
                    className="footernavitem">
                    Library
                </Link>
                <Link
                    to="/quiz"
                    className="footernavitem">
                    About
                </Link>
                <Link
                    to="/quiz"
                    className="footernavitem">
                    Terms
                </Link>
                <Link
                    to="/quiz"
                    className="footernavitem">
                    Privacy Policy
                </Link>
            </div>
            <p className="copyright">© 2022 Quizopolis. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;
