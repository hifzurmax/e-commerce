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
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './Providers/AuthProvider';


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
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
