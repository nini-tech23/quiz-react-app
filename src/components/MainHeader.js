import {Link} from 'react-router-dom';
import quizletLogo from '../assets/quizlet-logo.png';
const MainHeader = () => {
  return (
    <>
        <div className="mainheader">
        <Link to='/' className='logocontainer'>
            <img src={quizletLogo} alt='' className='logo'/>
            <h1>Quizopolis</h1>
        </Link>
            
        <div className='navcontainer'>
            <Link to='/' className='navitem'>Home</Link>
            <Link to='/quiz' className='navitem'>Library</Link>
            <Link to='/quiz' className='navitem'>About</Link>
        </div>
        <div className="logincontainer">
            <button className='login'>Login</button>
            <button className="signup">Sign Up</button>
        </div>
    </div>
    </>
  )
}

export default MainHeader