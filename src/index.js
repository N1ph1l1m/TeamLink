import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "../src/components/header/header"
import App from './components/app/app';
import NavBar from './components/navbar/navBar';
import reportWebVitals from './reportWebVitals';

import styled from 'styled-components'
const AppWrap = styled.div`width: 1440px;
                height: auto;
                margin: 0 auto;
                display: flex;
                border:1px solid red;`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
  <AppWrap>
  <NavBar/>
    <App/>
  </AppWrap>  
    
  </React.StrictMode>
);
reportWebVitals();
