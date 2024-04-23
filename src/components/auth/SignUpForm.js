import { Link } from 'react-router-dom'
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsCheck2Circle } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import useUserRegist from '../../hooks/useUserRegist';
import { ToastContainer } from 'react-toastify';
const SignUpForm = () => {
    const {textChangeHandler, formData, signupHandler} = useUserRegist();
    return (
        <>
            <ToastContainer/>
            <div className="signupform-card">
                <h1>Create New Account</h1>
                <form className='signup-form' onSubmit={(e)=>signupHandler(e)}>
                    <div className="input-icon-container">
                        <AiOutlineMail className="input-icon" />
                        <input
                            type="text"
                            placeholder="Email"
                            className="login-input"
                            onChange={textChangeHandler}
                            name='email'
                            value={formData.email}
                            required
                        />
                    </div>
                    <div className="input-icon-container">
                        <AiOutlineUser className="input-icon" />
                        <input
                            type="text"
                            placeholder="Username"
                            className="login-input"
                            onChange={textChangeHandler}
                            name='username'
                            value={formData.username}
                            required
                        />
                    </div>
                    <div className="input-icon-container">
                        <RiLockPasswordLine className="input-icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                            onChange={textChangeHandler}
                            name='password'
                            value={formData.password}
                            required
                        />
                    </div>
                    <div className="input-icon-container">
                        <BsCheck2Circle className="input-icon" />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="login-input"
                            onChange={textChangeHandler}
                            value={formData.confirmPassword}
                            name='confirmPassword'
                            required
                        />
                    </div>
                    <button type="submit" className='signup-link'>Sign Up</button>
                </form>
                <p className="lined-text">or</p>
                <button className="google-login-btn"><FcGoogle style={{fontSize: '22px'}}/><p>Sign in with Google Account</p></button>
                <p>Already have an account?</p>
                <Link to='/login' className='login-link'>Login</Link>
            </div>
        </>
        
    )
}

export default SignUpForm