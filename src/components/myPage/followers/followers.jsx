import React from "react";
import styled from "styled-components";
import FollowersItem from "./followersItem/followersItem";

const FollowersWrap = styled.div`
width:780px;
min-height:800px;
display:flex;
flex-flow: column nowrap;
`
class Followers extends React.Component{
    render(){
        return(
            <FollowersWrap>
                <FollowersItem/>
                <FollowersItem/>

            </FollowersWrap>
        )

    }
} 
export default Followers;