import { Outlet } from "react-router-dom";
import MainHeaderLibrary from "./common/MainHeaderLibrary";
const RootLayout = () => {
    return (
        <div className="quiz-list-layout">
            <MainHeaderLibrary />
            <Outlet />
        </div>
    );
};
export default RootLayout;
