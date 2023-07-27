import React, {Component} from "react";
import News from "./news/news";
import NavBar from "../navbar/navBar";
import Todo from "./todo";
import  "./homepage.css"


export default class HomePage extends Component{
   render(){
    return(
      <div className="homePage_wrap">
        <NavBar/>
        <News/> 
        <Todo/>
      </div>
    )
   }
}