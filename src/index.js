import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "../src/components/header/header"
import Root from "./routes/root"
import News from './components/homepage/news/news';
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
        element:<Messages/>,        
      },
      {
        path:"/news",
        element:<News/>,
      },
    ],
  },
]);

const AppWrap = styled.div`
                width: 1600px;
                ${'' /* border:3px solid red; */}
                margin:0 auto;
                display:flex;
                justify-content:center;
                flex-direction: row;
                flex-wrap: nowrap;
                `

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <AppWrap>
    <RouterProvider router={router}/>
    </AppWrap>
  </>

);
reportWebVitals();
