import React  from "react";
import PostListItem from "../post-list-item/post-list-item";
import { ListGroup } from "reactstrap";
import styled from 'styled-components'

const PostListBlock = styled.div`
        max-width: 780px;
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

    const PostList = ({ posts,onToggleLiked,onToggleComment,onToggleRepost})=>{
        const elements = posts.map((item) => {
            const{id, ...itemProps} = item;
            return(
                <PostListBlock key={id}>
                    <PostListItem
                        {...itemProps}
                        onToggleLiked={()=>onToggleLiked(id)}
                        onToggleComment={()=>onToggleComment(id)}
                        onToggleRepost={()=>onToggleRepost(id)}
                    />
                </PostListBlock>
            );
        });
        return <ListGroup className="app-list">{elements}</ListGroup>;
    };
    export default PostList;