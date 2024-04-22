import {userAPI} from "../API";
import { useState } from "react";
import { showErrorToast, showSuccessToast } from "../utils/toasNotif";
const useSignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const textChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            showErrorToast("Password and Confirm Password do not match");
            return;
        }
        try {
            const response = await userAPI.post("/", {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            });
            if (response.status === 201) {
                showSuccessToast("Registered successfully");
            } else {
                showErrorToast(response.data.message);
                throw new Error(response.data.message || "Failed to register");
            }
        } catch (error) {
            showErrorToast(error.response?.data?.message || "Failed to register");
        }
    };
    return { formData, textChangeHandler, submitHandler };
};

export default useSignUp;
