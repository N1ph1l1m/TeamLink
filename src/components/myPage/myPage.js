import React  , {Component}from "react";
import styled from "styled-components";
import './myPage.css'

import avatar from '../../routes/img/samurai.png'
import cover from '../../routes/img/cover.jpg'

const MyPageWrap = styled.div`
    margin-top:10px;
    width:1000px;
    background-color: white;
    border-radius: 10px;
    height: 300px;
    border: 1px solid #e4e4e4;
`;

// const InfoUserPage = styled.div`
//     width:auto;
//     height:70px;
//     border:1px solid red;
//     top:5px;
//     left:8px;
//     display:flex;
//     justify-content:center;
//     background-color: white;

// `


export default class MyPage extends Component{
    render(){
        return(
           <MyPageWrap>
            <img
                className="myPage_background"
                src={cover} alt="cover"/>
            <div className="myPage_profileWrap">
            <img
                className="myPage_profile_Avatar"
                src={avatar}
                alt="avatar"
            />
            <div className="myPage_profileItem">
            <div className="myPage_profileItem_user">
                <h2 className="user_name">Piter Parker</h2>
                <span className="user_status">Profile status</span>
            </div>
            <div className="myPage_profileItem_buttons">
                <button className="buttons_editProfile">
                Редактировать профиль
                </button>
                <button className="buttons_editProfile">
                Поделиться
                </button>
            </div>
            </div>
            </div>  
                </MyPageWrap>  
        )
    }
}