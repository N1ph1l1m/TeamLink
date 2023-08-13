import React  , {Component}from "react";
import styled from "styled-components";
import './myPage.css'

const MyPageWrap = styled.div`
  width: 1000px;
  height: 705px;
  border: 1px solid #e4e4e4;
  color: rgb(12, 11, 11);
  display: flex;
`;
export default class MyPage extends Component{
    render(){
        return(
            <MyPageWrap>

            </MyPageWrap>
        )
    }
}