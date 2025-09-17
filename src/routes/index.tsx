import { useRoutes } from "react-router-dom"
import Layout from "../pages/layout"
import Home from "../pages/home"
import About from "../pages/about"
import Projects from "../pages/projects"
import Contact from "../pages/contact"

const MainRouter = () => {
    return (
        useRoutes([
            {
                path: "/", element: <Layout />, children: [
                    {
                        path: "/", element: <Home />, index:true
                    },
                    {
                        path: "/about", element: <About />,
                    },
                    {
                        path: "/projects", element: <Projects />,
                    }
                ]
            },
        ])
    )
}

export default MainRouter
