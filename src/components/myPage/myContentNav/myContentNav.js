import React , {Component} from "react";
import './myContentNav.css';
import styled from "styled-components";
//import { Outlet } from "react-router-dom";
const ContentNav = styled.div`
    margin:0px auto;
    width:780px;
    height:auto;
    border:1px solid #e4e4e4;
    border-radius:10px;
    display:flex;
    flex-direction: row; 
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

export default class MyContentNav extends Component{
    render(){
        return (
          <ContentNav>
            <NavWrap>
              <NavItem>
                <button className="contentNav_button">Followers</button>
              </NavItem>
              <NavItem>
                <button className="contentNav_button">
                  Likes
                </button>
              </NavItem>
              <NavItem>
                <button className="contentNav_button">
                  Posts
                </button>
              </NavItem>
              <NavItem>
                <button className="contentNav_button">
                  Photos
                </button>
              </NavItem>
            </NavWrap>
          </ContentNav>
        );
    }
}