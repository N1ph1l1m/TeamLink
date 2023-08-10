import React, {Component} from "react";

import News from "./news/news";
import Todo from "./todo";

import  "./homepage.css"
  

export default class HomePage extends Component{
   render(){
    return(
      <div className="homePage_wrap">
        <News/> 
        <Todo/>
      </div>
    )
   }
}