import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
const RootLayout = () => {
    return (
        <div className="glass-card">
            <MainHeader />
            <Outlet />
            <Footer />
        </div>
    );
};
export default RootLayout;
