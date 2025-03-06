import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import { lazy, Suspense } from "react";
import PublicRouter from "./routes/PublicRouter";

const Home = lazy(() => import("../pages/public/Home"));
const AboutUs = lazy(() => import("../pages/public/about/AboutUs"));
// Loading fallback componeimport AboutUs from './../pages/public/about/AboutUs';
const Loading = () => <div>Loading...</div>;

// Define routes
const routes = [
    { path: "/", element: <Home />, index: true },
    { path: "/aboutus", element: <AboutUs /> },
];

// Create router
const routers = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <ScrollRestoration />
                <PublicRouter />
            </>
        ),
        children: routes
    },
    // {
    //     path: "/admin",
    //     element: <PrivateRoutes />,
    //     // children: [
    //     //     { path: "/", element: <Dashboard /> }
    //     // ]
    // }
]);

// Main Router Component
export default function MainRouter() {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={routers} />
        </Suspense>
    );
}
