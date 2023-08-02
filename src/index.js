import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "../src/components/header/header"
import Root from "./routes/root"
//import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}>
    </RouterProvider>
  
   

  </React.StrictMode>
);
reportWebVitals();
