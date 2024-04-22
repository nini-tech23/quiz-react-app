import {userAPI} from "../API";
import { useState } from "react";
import { showErrorToast, showSuccessToast } from "../utils/toasNotif";
import { useNavigate } from "react-router-dom";
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
                localStorage.setItem('token', response.data.token);
                showSuccessToast(response.data.message);
                setTimeout(() => {
                    navigate("/")
                }, 2000);
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
