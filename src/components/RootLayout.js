import { Outlet } from "react-router-dom";
import MainHeader from "./common/MainHeader";
import Footer from "./common/Footer";
const RootLayout = () => {
    return (
        <div className="homepage-card">
            <MainHeader />
            <Outlet />
            <Footer />
        </div>
    );
};
export default RootLayout;
