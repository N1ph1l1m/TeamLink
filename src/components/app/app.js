import React , { Component } from "react";
import HomePage from "../homepage";
import Header from "../header";

export default class App extends Component{
    render(){
        return(
            <> 
            <Header/>
            <HomePage/>
            </>
        )
    }
}