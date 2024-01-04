import React from "react";
import styled from "styled-components";
import logo from "../../../../router/../routes/img/logo.png"
 import more from "./more.png"

const FollowersWrap = styled.div`
width:750px;
height:70px;
margin-top:10px;
margin-left: 20px;
display:flex;
flex-flow:row nowrap;
justify-content: space-between;
`
const FollowersLogoWrap = styled.div`
    width: 80px;
    height: 70px;
    display:flex;
    align-items: center;
`
const LogoImg = styled.img`
  width: 60px;
    height: 60px;
    margin: 0px auto;
    border-radius: 50px;
    border:1px solid black;
`
const FollowersTextWrap = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    flex-wrap: nowrap;
    width: 593px;
    height: 70px;
`
const TextTitle = styled.span`
    margin-bottom: 10px;
    font-size: 20px;
    margin-left: 7px;
    font-weight: 500;
    color:#3486eb;
`
const TextMessage = styled.span`
    width: 220px;
    height: 17px;
    font-size: 14px;
    margin-left: 7px;
    overflow: hidden;
    color:#3486eb;
`
const FollowersMore = styled.div`
    width: 25px;
    height: 25px;
    position:relative;
    border-radius:30px;
`
const MoreItem = styled.img`
width:25px;
height:25px;
`
class FollowerItem extends React.Component{
    render(){
        return(
        <FollowersWrap>
                <FollowersLogoWrap>
                    <LogoImg 
                        src = {logo}
                        lt="logo"/>
                </FollowersLogoWrap>
                <FollowersTextWrap>
                    <TextTitle>Peter Parker</TextTitle>
                    <TextMessage>Write message  </TextMessage>
                </FollowersTextWrap>
                <FollowersMore>
                        <MoreItem 
                        src={more}
                        alt="moreIvent"/>
                </FollowersMore>
        </FollowersWrap>
        )

    }
} 
export default FollowerItem;