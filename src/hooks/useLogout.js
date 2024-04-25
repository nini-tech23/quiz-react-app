import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";


const useLogout = () => {
    const navigate = useNavigate();
    const {logout} = useUserContext();
    const handleLogout = () => {
        logout();
        navigate('/');
    }
    return { handleLogout}
}

export default useLogout