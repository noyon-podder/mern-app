import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import Client from "../pages/Client";
import Home from "../pages/Home";
import OurWork from "../pages/OurWork";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/client",
                element: <Client/>
            },
            {
                path: "/work",
                element: <OurWork/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
        ]
    }
])