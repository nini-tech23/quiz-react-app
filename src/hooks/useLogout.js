import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";


const useLogout = () => {
    const navigate = useNavigate();
    const {setUser} = useUserContext();
    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
    }
    return { handleLogout}
}

export default useLogout