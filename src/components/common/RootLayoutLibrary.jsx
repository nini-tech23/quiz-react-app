import { Outlet } from "react-router-dom";
import MainHeaderLibrary from "./MainHeaderLibrary";
import { ToastContainer } from "react-toastify";
const RootLayout = () => {
    return (
        <>
            <ToastContainer/>
            <div className="quiz-list-layout">
                <MainHeaderLibrary />
                <Outlet />
            </div>
        </>
        
    );
};
export default RootLayout;
