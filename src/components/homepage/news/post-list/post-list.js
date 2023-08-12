import React , {Component}from "react";
import PostListItem from "../post-list-item/post-list-item";
import styled from 'styled-components'

const PostList = styled.div`
  width: 738px;
        min-height: 200px;
        border-radius: 10px;
        background: #F1F1F1;
        border: 1px solid #E4E4E4;
        box-sizing: border-box;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        flex-flow: column nowrap;
        margin-bottom: 15px;
    `

export default class Postlist extends Component{
    render(){
        return(
            <PostList>
                <PostListItem/>
            </PostList>
        )
    }
}