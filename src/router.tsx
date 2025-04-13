import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Pokédex from "./pages/Pokédex";
import Article from "./pages/Article";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        element: <App/>,
        path:"/",
        children: [
            {
                path:"",
                element: <Home/>
            },
            {
                path:"/Pokédex",
                element: <Pokédex/>
            },
            {
                path:"/Login",
                element: <Login/>
            },
            {
                path:"/Article/:id",
                element: <Article/>
            },

        ]
    },
]);

export default router