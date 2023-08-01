import React , { Component } from "react";
import styled from 'styled-components'
import Messages from "../messages";
//import News from "../homepage/news/news";
import "./app.css"
//import Todo from "../homepage/todo";

const AppWrap = styled.div`width: 1440px;
                height: auto;
                margin: 0 auto;
                display: flex;
                border:1px solid red;`
export default class App extends Component{
    render(){
        return(
            <> 
            <AppWrap>
                <Messages/>
            </AppWrap>
            </>
        )
    }
}