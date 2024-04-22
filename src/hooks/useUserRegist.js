import {userAPI} from "../API";
import { useState } from "react";
import { showErrorToast, showSuccessToast } from "../utils/toasNotif";
import { useNavigate } from "react-router-dom";
const useUserRegist = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();
    const textChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // email validation
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    //username validation
    const validateUsername = (username) => {
        const re = /^[a-zA-Z0-9]{3,16}$/;
        return re.test(username);
    }
    //password validation
    const validatePassword = (password) => {
        const minCharRe = /^.{8,}$/;
        const upperRe = /[A-Z]/;
        const lowerRe = /[a-z]/;
        const numberRe = /[0-9]/;
        const specialRe = /[^\w\d\s:]/;
        if (!minCharRe.test(password)) {
            return "Password must be at least 8 characters long.";
        }
        if (!upperRe.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!lowerRe.test(password)) {
            return "Password must contain at least one lowercase letter.";
        }
        if (!numberRe.test(password)) {
            return "Password must contain at least one number.";
        }
        if (!specialRe.test(password)) {
            return "Password must contain at least one special character.";
        }
        return null; 
    }
    
    
    const signupHandler = async (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            showErrorToast('Invalid email format');
            return;

        } 
        if (formData.username.length<3 || formData.username.length>16) {
            showErrorToast('Username must be between 3 and 16 characters');
            return;
        }
        if (!validateUsername(formData.username)) {
            showErrorToast('Username can only contain letters, numbers');
            return;
        }
        const passwordError = validatePassword(formData.password);
        // Check if there is an error message returned
        if (passwordError) {
            showErrorToast(passwordError); // Display the specific error message
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            showErrorToast("Passwords do not match");
            return;
        }
        try {
            const response = await userAPI.post("/users", {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            });
            if (response.status === 200) {
                setFormData({
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                })
                showSuccessToast("Registered successfully");
                setTimeout(()=>{
                    navigate("/login");
                }, 3000)
            } else {
                showErrorToast(response.data.message);
                throw new Error(response.data.message || "Failed to register");
            }
        } catch (error) {
            showErrorToast(error.response?.data?.message || "Failed to register");
        }
    };
    return { formData, textChangeHandler, signupHandler };
};

export default useUserRegist;
