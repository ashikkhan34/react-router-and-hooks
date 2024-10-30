import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App"


import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/contact';
import Users from './Components/Users/Users';
import UserDetails from './Components/UserDetails/UserDetails';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children :[
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },{
        path: "/posts",
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },{
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ]
  },
  
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
