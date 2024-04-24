import { useNavigate } from "react-router-dom";
const useLogout = () => {
    const navigate = useNavigate();
    const tokenHandler = () =>localStorage.getItem('token')
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/')
        window.location.reload();
    }
    return {tokenHandler, handleLogout}
}

export default useLogout