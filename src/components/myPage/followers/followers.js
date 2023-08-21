import React, {Component }from "react";
import styled from "styled-components";
import FollowersItem from "./followersItem/followersItem";

const FollowersWrap = styled.div`
width:780px;
min-height:800px;

display:flex;
flex-flow: column nowrap;
ali

`
export default class Followers extends Component{
    render(){
        return(
            <FollowersWrap>
                <FollowersItem/>
                <FollowersItem/>
                <FollowersItem/>
                <FollowersItem/>
            
            </FollowersWrap>
        )

    }
} 
