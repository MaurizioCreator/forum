import About from "../pages/About";
import {Navigate, Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login";


export const privateRoutes = [
    {path: '/about', component: <About/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostIdPage/>, exact: true},
    {path: '/error', component: <Error/>, exact: true},
    {path: '', component: <Posts/>, exact: true},
    {path: '*', component: <Error/>, exact: true},
    {path: '/login', component: <Navigate to="/posts"/>, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: <Login/>, exact: true},
    {path: '/posts', component: <Navigate to="/login"/>, exact: true},
    {path: '/about', component: <Navigate to="/login"/>, exact: true},
    {path: '/posts/:id', component: <Navigate to="/login"/>, exact: true},
    {path: '', component: <Login/>, exact: true},
    {path: '*', component: <Error/>, exact: true},
]

