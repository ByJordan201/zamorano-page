import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import AboutUs from "../Pages/AboutUs";
/* import Blog from "../Pages/BlogPages/Blog"; */
import BlogDetails from "../Pages/BlogPages/BlogDetails";
import Contact from "../Pages/Contact";
import ErrorPage from "../Pages/ErrorPage";
import Home06 from "../Pages/HomePages/Home06";
import Project01 from "../Pages/ProjectPages/Project01";
/* import Service01 from "../Pages/ServicePages/Service01"; */

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                path: '/',
                element: <Home06/>,
            },
            {
                path: '/project-1',
                element: <Project01/>,
            },
            
            /* {
                path: '/service-1',
                element: <Service01/>,
            }, */
            {
                path: '/contact',
                element: <Contact/>,
            },
            {
                path: '/about',
                element: <AboutUs/>,
            },
            {
                path: '/blog',
                element: <BlogDetails/>,
            },
            /* {
                path: '/blog',
                element: <Blog/>,
            },
            {
                path: '/blog-details',
                element: <BlogDetails/>,
            }, */
            {
                path: '*',
                element: <ErrorPage/>,
            },

        ]
    },
])