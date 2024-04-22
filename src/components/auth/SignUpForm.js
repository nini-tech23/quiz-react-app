import { Link } from 'react-router-dom'
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsCheck2Circle } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import useSignUp from '../../hooks/useSignUp';
import { ToastContainer } from 'react-toastify';
const SignUpForm = () => {
    const {textChangeHandler, formData, submitHandler} = useSignUp();
    return (
        <>
            <ToastContainer/>
            <div className="signupform-card">
                <h1>Create New Account</h1>
                <form className='signup-form' onSubmit={(e)=>submitHandler(e)}>
                    <div className="input-icon-container">
                        <AiOutlineMail className="input-icon" />
                        <input
                            type="text"
                            placeholder="Email"
                            className="login-input"
                            onChange={textChangeHandler}
                            name='email'
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
                    <button type="submit" className='signup-btn'>Sign Up</button>
                </form>
                <p className="lined-text">or</p>
                <button className="google-login-btn"><FcGoogle style={{fontSize: '20px'}}/><p>Sign in with Google Account</p></button>
                <p>Already have an account?</p>
                <Link to='/login'><button className='login-btn'>Login</button></Link>
            </div>
        </>
        
    )
}

export default SignUpForm