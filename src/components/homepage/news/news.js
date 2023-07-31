import React, {Component} from "react";
import styled from 'styled-components'
import PostAddForm from "./post-add-form/post-add-form";
import Postlist from "./post-list";

const NewsWrap = styled.div`
    width: 770px;
    min-height: 1000px;
    border: 1px solid #E4E4E4;
    color: rgb(12, 11, 11);
    `

export default class News extends Component{
   render(){
    return(
      <NewsWrap>
        <PostAddForm/>
        <Postlist/>
        <Postlist/>
        <Postlist/>


      </NewsWrap>
    )
   }
}