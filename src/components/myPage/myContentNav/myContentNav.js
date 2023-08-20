import React , {Component} from "react";
import Followers from "../followers";
import styled from "styled-components";
//import { Outlet } from "react-router-dom";

const ContentNav = styled.div`
    margin:0px auto;
    width:780px;
    min-height:800px;
    border:1px solid #e4e4e4;
    border-radius:10px;
    display:flex;
    flex-direction: column; 
`

const NavWrap = styled.div`
width:780px;
height:40px;
display: flex;
flex-direction: row;
border-radius:10px;
border-bottom:3px solid #e4e4e4;
z-index:1;
`

const NavItem = styled.div`
  margin-top:10px;
  height: 30px;
  display:flex;
  margin-right:40px;
  align-items:end;
  z-index:2;
  border-bottom:3px solid #e4e4e4;
  &:first-child{
    margin-right:40px;
    margin-left:10px;
    border-bottom:3px solid #3486eb;
  }

`;
const NavButton = styled.div`
    color:#3486eb;
    text-decoration: none;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border:0px solid transparent;
    background-color:transparent;
    &:hover{
        cursor: pointer;
    }
`
export default class MyContentNav extends Component{
    render(){
        return (
          <ContentNav>
            <NavWrap>
              <NavItem>
                <NavButton>Followers</NavButton>
              </NavItem>
              <NavItem>
                <NavButton>Likes</NavButton>
              </NavItem>
              <NavItem>
                <NavButton>Posts</NavButton>
              </NavItem>
              <NavItem>
                <NavButton>Photos</NavButton>
              </NavItem>
            </NavWrap>
            <Followers/>
          </ContentNav>
        );
    }
}