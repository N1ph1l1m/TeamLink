import React  , {Component}from "react";
import styled from "styled-components";
import './myPage.css'

import avatar from '../../routes/img/samurai.png'
import cover from '../../routes/img/cover.jpg'

const MyPageWrap = styled.div`
    width:1000px;
    background-color: white;
    border-radius: 10px;
    height: 330px;
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
        
            <>
           <MyPageWrap>
            <img
                className="main_backgroundProf"
                src={cover}/>
            <div className="main_wrap_avatar">
            <img
                className="main_item_avatar"
                src={avatar}
                alt="avatar"
            />
            </div>
            <div className="main_profileHeader">
            <div className="main_profileHeader_user">
                <h2 className="user_name">Tahiro Nakamatsu</h2>
                <div className="user_status">Profile status</div>
            </div>
            <div className="main_profileHeader_editProfile">
                <button className="editProfile_button ">
                {" "}
                Редактировать профиль
                </button>
                <button className="editProfile_button">
                Поделиться
                </button>
            </div>
            </div>

            </MyPageWrap>
            </>         
        )
    }
}

{/* <div className="main_profile_block" >
<img
  className="main_backgroundProf"
  src="https://gamerwall.pro/uploads/posts/2021-11/1637896192_2-gamerwall-pro-p-oboi-na-rabochii-stol-art-priroda-oboi-na-2.jpg"
  alt="photo1"
></img>
<div className="main_wrap_avatar">
  <img
    className="main_item_avatar"
    src="https://i.pinimg.com/originals/49/67/8e/49678e2e351debba4814d109532a2b81.png"
    alt="avatar"
  />
</div>
<div className="main_profileHeader">
  <div className="main_profileHeader_user">
    <h2 className="user_name">Tahiro Nakamatsu</h2>
    <div className="user_status">Profile status</div>
  </div>
  <div className="main_profileHeader_editProfile">
    <button className="editProfile_button ">
      {" "}
      Редактировать профиль
    </button>
    <button className="editProfile_button editProfile_button_more">
      {" "}
      Ещё <span className="more_arrow">↓</span>
    </button>
  </div>
</div>
</div> */}

