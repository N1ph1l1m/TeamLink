import React , {Component}from "react";
import './post-list.css'
import PostListItem from "../post-list-item/post-list-item";

export default class Postlist extends Component{
    render(){
        return(
            <div className="postList_wrapper">
                <PostListItem/>
            </div>
        )
    }
}