import React , { Component } from "react";
//import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom';
import "./app.css"
import News from "../homepage/news/news";


// const AppWrap = styled.div`width: 1440px;
//                 height: auto;
//                 margin: 0 auto;
                
//                 border:1px solid red;`
export default class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <News/>
            </BrowserRouter>
          
        )
    }
}