import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider} from "react-router-dom";

import Header from "../src/components/header/header"
import Root from "./routes/root"
import HomePage from './components/homepage/homepage'
import ErrorPage from './components/errorPage/error-page';
import Messages from './components/messages/messages';
import MyPage from './components/myPage/myPage';

import './index.css';
import styled from 'styled-components'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/profile",
        element:<MyPage/>,        
      },
      {
        path:"/message",
        element:<Messages/>,        
      },
      {
        path:"/news",
        element:<HomePage/>,
      },
      {
        path:"/news",
        element:<HomePage/>,
      },
    ],
  },
]);

const AppWrap = styled.div`
                max-width: 1400px;
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
