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
        loader:()=>fetch('https://developer-server-production.up.railway.app/projects')
      },
      {
        path: "/project/:id",
        element: <Full />,
        loader:({params})=>fetch(`https://developer-server-production.up.railway.app/projects/${params.id}`)
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
