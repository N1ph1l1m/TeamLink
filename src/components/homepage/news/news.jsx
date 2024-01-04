import React  from "react";
import styled from 'styled-components'
import PostAddForm from "./post-add-form/post-add-form";
import Postlist from "./post-list";

const NewsWrap = styled.div`
    max-width: 800px;
    min-height: 1000px;
    color: rgb(12, 11, 11);
    `

class News extends React.Component{
  
    state={
    };
  onToggleLiked = ()=> {
    console.log("Click like");
  }
  onToggleComment = () => {
    console.log("Click comments");
  }

  onToggleRepost = () =>{
    console.log("Click share post");
  }
  
   render(){
    const data=[
      {id:"1",label:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", liked:true,comments:false}, 
      {id:"2",label:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ", liked:true,comments:false}
    ];
    //const visiblePosts = true;
    return(
      <NewsWrap>
        <PostAddForm/>
        <Postlist 
          posts={data}
          onToggleLiked = {this.onToggleLiked}
          onToggleComment = {this.onToggleComment}
          onToggleRepost = {this.onToggleRepost}
        />
      </NewsWrap>
    )
   }
}
export default News