import {userAPI} from "../API";
import { useState } from "react";
import { showErrorToast, showSuccessToast } from "../utils/toasNotif";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
// import useLogout from "../hooks/useLogout";
const useLogin = () => {
    const navigate = useNavigate();
    const {setUser} = useUserContext();
    // const {handleLogout} = useLogout();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const textChangeHandler =  (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await userAPI.post('/login', formData);
            if (response.status===200){
                const {token} = response.data;
                localStorage.setItem('token', token);
                showSuccessToast(response.data.message);
                setUser({token, username: formData.username});
                setTimeout(() => {
                    navigate("/")
                }, 2000);
                //set timemout for automatic logout when token expires (1hr)
                // setTimeout(()=>{
                //     handleLogout();
                // }, expiresIn * 1000);
            }else{
                showErrorToast(response.data.message);
            }
        }catch(error){
            showErrorToast(error.response.data.message);
        }
    }
    

    return { formData, textChangeHandler, loginHandler };
};

export default useLogin;
