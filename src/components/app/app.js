import React , { Component } from "react";
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom';
//import Messages from "../messages";
// import News from "../homepage/news/news";
// import Todo from "../homepage/todo";
import NavBar from "../navbar/navBar";
import "./app.css"


const AppWrap = styled.div`width: 1440px;
                height: auto;
                margin: 0 auto;
                
                border:1px solid red;`
export default class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <AppWrap>
            <NavBar/>
            </AppWrap>
            </BrowserRouter>
          
        )
    }
}