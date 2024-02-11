import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './LayOut/LayOut.jsx';
import Home from './Pages/Home/Home.jsx';
import Project from './Pages/Project/Project.jsx';
import Full from './Pages/Project/Full';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/ErrorPage/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/project/:id",
        element: <Full />,
        loader:({params})=>fetch(`https://developer-server.vercel.app/projects/${params.id}`),
       errorElement:<Error/>
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
