import React  from "react";
import styled from 'styled-components'
import PostAddForm from "./post-add-form/post-add-form";
import Postlist from "./post-list";

const NewsWrap = styled.div`
    max-width: 800px;
    min-height: 1000px;
    color: rgb(12, 11, 11);

    `

export default class News extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:[
        {label:"Texttt", liked:true,id:"1",comments:false}
      ]
    }
  }
   render(){

    //const visiblePosts = true;
    return(
      <NewsWrap>
        <PostAddForm/>
        {/* <Postlist 
                posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        /> */}
        
      
      </NewsWrap>
    )
   }
}