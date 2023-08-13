import React  , {Component}from "react";
import styled from "styled-components";
import './myPage.css'

import profile from '../../routes/img/profile.png'
import logo from '../../routes/img/logo.png'

const MyPageWrap = styled.div`
  width: 1000px;
  height: 705px;
  border: 1px solid #e4e4e4;
  color: rgb(12, 11, 11);
  position:relative;
`;

const InfoUserPage = styled.div`
    width:auto;
    height:70px;
    border:1px solid red;
    top:5px;
    left:8px;
    display:flex;
    justify-content:center;
    background-color: white;

`
export default class MyPage extends Component{
    render(){
        return(
            <MyPageWrap>
                <div className="profileCover_wrap">
                    <img className="profileCoverImg" src={profile} alt='profileCover'/>
                </div>
                <div className="profileInfo_wrap">
                    <InfoUserPage>
                    <div className="profileInfo_logo">
                        <img src ={logo} alt="logo"></img>
                    </div>
                    <div className="profileInfo_text">
                        <span className="profileInfo_FL">Peter Parker</span>
                        <span className="profileInfo_Tag">@peterparker</span>
                    </div>
                    </InfoUserPage>
                </div>
            </MyPageWrap>
        )
    }
}
