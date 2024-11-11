import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Orders from "../pages/Orders";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/orders',
            element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
        },
        {
          path:'/profile',
          element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
       
      ]
    },
  ]);
export {router}