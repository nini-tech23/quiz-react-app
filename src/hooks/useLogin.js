import {userAPI} from "../API";
import { useState } from "react";
import { showErrorToast, showSuccessToast } from "../utils/toasNotif";
import { useNavigate } from "react-router-dom";
import {default as handleLogout } from './useLogout'
const useUserRegist = () => {
    const navigate = useNavigate();
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
            const response = await userAPI.post('/login', {
                username: formData.username,
                password: formData.password
            });
            if (response.status===200){
                const {token, expiresIn} = response.data;
                localStorage.setItem('token', token);
                showSuccessToast(response.data.message);
                setTimeout(() => {
                    navigate("/")
                }, 2000);
                //set timemout for automatic logout when token expires (1hr)
                setTimeout(()=>{
                    handleLogout();
                }, expiresIn * 1000);
            }else{
                showErrorToast(response.data.message);
            }
        }catch(error){
            showErrorToast(error.response.data.message);
        }
    }
    

    return { formData, textChangeHandler, loginHandler };
};

export default useUserRegist;
