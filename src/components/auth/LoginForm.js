import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import SignUpLink from "./SignUpLink";
import useLogin from "../../hooks/useLogin";
const LoginForm = () => {
    const { textChangeHandler } = useLogin();
    return (
        <div className="login-card">
            <div className="login">
                <h1>Log in to Your Account</h1>
                <form
                    className="login-form"
                    onSubmit={e => e.preventDefault()}>
                    <div className="input-icon-container">
                        <AiOutlineUser classname="input-icon" />
                        <input
                            type="text"
                            placeholder="Username"
                            className="login-input"
                            required
                        />
                    </div>
                    <div className="input-icon-container">
                        <RiLockPasswordLine classname="input-icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                            required
                        />
                    </div>
                    <button type="submit" className="signup-btn">Login</button>
                </form>
                <p className="lined-text">or</p>
                <button className="google-login-btn" type="submit"><FcGoogle style={{fontSize: '20px'}}/><p>Sign in with Google Account</p></button>
            </div>
            <SignUpLink/>
        </div>
    );
};

export default LoginForm;
