import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import SignUpLink from "./SignUpLink";
import useLogin from "../../hooks/useLogin";
import { ToastContainer } from "react-toastify";
const LoginForm = () => {
    const { formData, textChangeHandler, loginHandler } = useLogin();
    return (
        <>
            <ToastContainer/>
            <div className="login-card">
                <div className="login">
                    <h1>Log in to Your Account</h1>
                    <form
                        className="login-form"
                        onSubmit={(e)=>loginHandler(e)}>
                        <div className="input-icon-container">
                            <AiOutlineUser className="input-icon" />
                            <input
                                type="text"
                                name='username'
                                placeholder="Username"
                                className="login-input"
                                value={formData.username}
                                onChange={textChangeHandler}
                                required
                            />
                        </div>
                        <div className="input-icon-container">
                            <RiLockPasswordLine className="input-icon" />
                            <input
                                type="password"
                                name='password'
                                placeholder="Password"
                                className="login-input"
                                value={formData.password}
                                onChange={textChangeHandler}
                                required
                            />
                        </div>
                        <button type="submit" className="signup-link">Login</button>
                    </form>
                    <p className="lined-text">or</p>
                    <button className="google-login-btn" type="submit"><FcGoogle style={{fontSize: '22px'}}/><p>Sign in with Google Account</p></button>
                </div>
                <SignUpLink/>
            </div>
        </>
        
    );
};

export default LoginForm;
