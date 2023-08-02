import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "../src/components/header/header"
import Root from "./routes/root"
//import App from './components/app/app';
 import styled from 'styled-components'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/errorPage/error-page';
import Messages from './components/messages';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/message",
        element:<Messages/>
      },
    ],
  },
]);

const AppWrap = styled.div`width: 1500px;
                margin: 0 auto;
                ${'' /* border:1px solid red; */}
                `

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <AppWrap>
      <RouterProvider router={router}/>
    </AppWrap>


   

  
   

  </React.StrictMode>
);
reportWebVitals();
