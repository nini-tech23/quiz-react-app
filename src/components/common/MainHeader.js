import {Link} from 'react-router-dom';
import {MdAccountCircle} from 'react-icons/md';
import quizletLogo from '../../assets/quizlet-logo.png';
const MainHeader = () => {
  const token = localStorage.getItem('token')
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }
  return (
    <>
      <div className="main-header">
        <Link to='/' className='logo-container'>
            <img src={quizletLogo} alt='' className='logo'/>
            <h1>Quizopolis</h1>
        </Link>
            
        <div className='nav-container'>
            <Link to='/' className='nav-item'>Home</Link>
            <Link to='/library' className='nav-item'>Library</Link>
            <Link to='/quiz' className='nav-item'>About</Link>
        </div>
        {token ? (
          <div className="profile-container">
              <Link to='/profile' className='profile-link'><MdAccountCircle className='user-icon'/></Link>
              <Link to='/' onClick={handleLogout} className='logout-btn'>Logout</Link>
          </div>
        ) : (
          <div className="login-container">
            <Link to='/login'><button className='login-btn'>Login</button></Link>
            <Link to='/signup'><button className="signup-btn">Sign Up</button></Link>
          </div>
        )}
      </div>
    </>
  )
}

export default MainHeader