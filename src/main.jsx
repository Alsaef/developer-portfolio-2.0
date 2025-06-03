import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './LayOut/LayOut';
import Home from './Page/Home';
import About from './Page/About';
import Projects from './Page/Projects';
import Resume from './Page/Resume';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <RouterProvider router={router} />
    
  </React.StrictMode>,
)
