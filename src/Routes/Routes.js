import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import CheckOut from "../Components/CheckOut/CheckOut";
import Course from "../Components/Courses/Course/Course";
import CourseContainer from "../Components/Courses/CourseContainer/CourseContainer";
import Courses from "../Components/Courses/Courses";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login/Login";
import Registration from "../Components/Login/Registration/Registration";
import NotFound from "../Components/NotFound/NotFound";
import Main from "../layouts/Main"
import PrivateRoutes from "./PrivateRoutes";







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
                path:'/home',
                element:<Home></Home>
               
            },
            {
                path:'/courses',
                element: <Courses></Courses>,
                loader: ()=>fetch('https://ml-tutorial-server-sadia88.vercel.app/courses')
            },
           
            {
                path:'/courses/course/:id',
                element: <CourseContainer></CourseContainer>,
                loader: ({params})=>fetch(`https://ml-tutorial-server-sadia88.vercel.app/courses/course/${params.id}`)
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
                path:'/blog',
                element:<Blogs></Blogs>
            },
           
           
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/courses/course/checkout/:id',
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({params})=>fetch(`https://ml-tutorial-server-sadia88.vercel.app/courses/course/checkout/${params.id}`)
            },
            {
                path:'/*',
                element: <NotFound></NotFound>
            }
        ]
    }

])