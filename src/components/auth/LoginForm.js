import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import SignUpLink from "./SignUpLink";
const LoginForm = () => {
    return (
        <div className="login-card">
            <div className="login">
                <h1>Log in to Your Account</h1>
                <form
                    action="submit"
                    className="login-form">
                    <div className="input-icon-container">
                        <AiOutlineUser classname="input-icon" />
                        <input
                            type="text"
                            placeholder="Username"
                            className="login-input"
                        />
                    </div>
                    <div className="input-icon-container">
                        <RiLockPasswordLine classname="input-icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                        />
                    </div>
                    <button type="submit" className="signup-btn">Login</button>
                </form>
                <p className="lined-text">or</p>
                <button className="google-login-btn"><FcGoogle style={{fontSize: '20px'}}/><p>Sign in with Google Account</p></button>
            </div>
            <SignUpLink/>
        </div>
    );
};

export default LoginForm;
