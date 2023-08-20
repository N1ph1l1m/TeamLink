import React , {Component} from "react";
import './myContentNav.css';
import styled from "styled-components";
import { Link } from "react-router-dom";
//import { Outlet } from "react-router-dom";
const ContentNav = styled.div`
    margin:0px auto;
    width:780px;
    border:1px solid #e4e4e4;
    border-radius:10px;
    height:100%;
    display:flex;
    flex-direction: row; 
`

const NavWrap = styled.div`
width:780px;
height:40px;
display: flex;
flex-direction: row;
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
        return(
            <ContentNav>
                <NavWrap>
                    <NavItem>
                        <Link to="/profile" className="contentNav_text">
                        Followers
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/profile" className="contentNav_text">
                        Likes
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/profile" className="contentNav_text">
                        Posts
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/profile" className="contentNav_text">
                        Photos
                        </Link>
                    </NavItem>
                </NavWrap>
            </ContentNav>
        )
    }
}