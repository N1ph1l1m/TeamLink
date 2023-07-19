import React, {Component} from "react";
import Posts from "./posts";
import NavBar from "./navbar/navBar";
import Todo from "./todo";
import  "./homepage.css"


export default class HomePage extends Component{
   render(){
    return(
      <div className="homePage_wrap">
        <NavBar/>
        <Posts/>
        <Todo/>
      </div>
    )
   }
}