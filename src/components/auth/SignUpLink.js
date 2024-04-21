import {Link} from 'react-router-dom';
const SignUpLink = () => {
  return (
    <div className="signup">
        <h1>New Here?</h1>
        <p>Sign up and discover a great amount of new opportunities</p>
        <Link to='/signup'><button className="signup-link">Sign Up</button></Link>
    </div>
  )
}

export default SignUpLink