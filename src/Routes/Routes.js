import { createBrowserRouter } from "react-router-dom";
import Courses from "../Components/Courses/Courses";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login/Login";
import Registration from "../Components/Login/Registration/Registration";
import Main from "../layouts/Main"







export const routes=createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
               
            },
            {
                path:'/courses',
                element: <Courses></Courses>,
                loader: ()=>fetch('https://ml-tutorial-server-sadia88.vercel.app/courses')
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/register',
                element:<Registration></Registration>
            },
           
           
            {
                path:'/login',
                element: <Login></Login>
            }
        ]
    }

])