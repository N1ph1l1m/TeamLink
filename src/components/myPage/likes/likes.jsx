import React from "react";
import styled from "styled-components";

const LikesWrap = styled.div`
width:780px;
min-height:800px;
display:flex;
flex-flow: column nowrap;
border:1px solid red;
align-items:center;
`
class Likes extends React.Component{
    render(){
        return(
            <LikesWrap>
                <h1>Likes</h1>
            </LikesWrap>
        )
    }
}
export default Likes;