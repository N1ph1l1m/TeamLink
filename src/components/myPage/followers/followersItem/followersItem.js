import React, {Component }from "react";
import styled from "styled-components";
import logo from "../../../../router/../routes/img/logo.png"
import "./followersItem.css"
// import more from "./more.png"

const FollowersWrap = styled.div`
width:750px;
height:70px;
margin-top:15px;
margin-left: 20px;
display:flex;
flex-flow:row nowrap;
align-item:center;
`

export default class FollowerItem extends Component{
    render(){
        return(
        <FollowersWrap>
                <div className="follower_logo">
                    <img  className="follower_logo_img" src ={logo} alt="logo"></img>
                </div>
                <div className="follower_text">
                    <span className="follower_text_title">Peter Parker</span>
                    <span className="follower_text_message">Write message  </span>
                </div>
                <div className="follower_more">
                        <span className="more_text">...</span>
                </div>
        </FollowersWrap>
        )

    }
} 
