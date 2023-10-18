import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home';
import AddProducts from './pages/AddProducts';
import BrandsProducts from './pages/BrandsProducts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/brandProducts/:brand",
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.brand}`),
        element: <BrandsProducts></BrandsProducts>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
