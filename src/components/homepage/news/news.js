import React, {Component} from "react";
import  "./news.css"
import styled from 'styled-components'
import PostAddForm from "./post-add-form/post-add-form";

const NewsWrap = styled.div`
    width: 770px;
    height: 1000px;
    border: 1px solid #E4E4E4;
    color: rgb(12, 11, 11);
    `

export default class News extends Component{
   render(){
    return(
      <NewsWrap>
        <PostAddForm/>
      </NewsWrap>
    )
   }
}