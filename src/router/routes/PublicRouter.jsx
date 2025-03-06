import { Outlet } from "react-router-dom";

import PublicAppBar from "../../components/Appbar/PublicAppBar";
import Footer from './../../components/Footer';
import { Toolbar } from "@mui/material";

const PublicRouter = () => {
    // const location = useLocation();
    // const hideLayout = location.pathname === "/login";

    return (
        <>
            {/* {!hideLayout && <PublicAppBar />} */}
            <PublicAppBar />
            <Toolbar />
            <Outlet />
            <Footer />
            {/* {!hideLayout && <Footer />} */}
        </>
    );
};

export default PublicRouter;
