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
import { Provider } from 'react-redux'
import { store } from './app/store.js';
import Video from './Pages/Video/Video.jsx';
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
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/explorprojects",
        element: < Video/>,
      },
      {
        path: "/project/:id",
        element: <Full />,
        loader:({params})=>fetch(`https://developer-server2-0.vercel.app/projects/${params.id}`),
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
   <Provider store={store}>
   <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>,
)
