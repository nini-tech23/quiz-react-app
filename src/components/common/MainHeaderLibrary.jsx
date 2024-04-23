import {Link} from 'react-router-dom';
import {MdAccountCircle} from 'react-icons/md';
import useLogout from '../../hooks/useLogout';
import quizletLogo from '../../assets/quizlet-logo.png';
const MainHeaderLibrary = () => {
    const {tokenHandler, handleLogout} = useLogout();
    const token = tokenHandler();
    return (
    <>
        <div className="main-header-alt">
            <Link to='/' className='logo-container'>
                <img src={quizletLogo} alt='' className='logo'/>
                <h1>Quizopolis</h1>
            </Link>
                
            <div className='nav-container'>
                <Link to='/' className='nav-item-alt'>Home</Link>
                <Link to='/library' className='nav-item-alt'>Library</Link>
                <Link to='/quiz' className='nav-item-alt'>About</Link>
            </div>
            {token ? (
            <div className="profile-container">
                <Link to='/profile' className='profile-link'><MdAccountCircle className='user-icon'/></Link>
                <button onClick={handleLogout} className='logout-btn'>Logout</button>
            </div>
            ) : (
            <div className="login-container">
                <Link to='/login'className='login-link'>Login</Link>
                <Link to='/signup' className="signup-link">Sign Up</Link>
            </div>
            )}
        </div>
        </>
    )
}

export default MainHeaderLibrary