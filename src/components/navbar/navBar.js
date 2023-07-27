import React, { Component } from "react";
import styled from 'styled-components'
import "./navBar.css";
//img
import logo from "./img/logoUser.png";
import user from "./img/user.png";
import messages from "./img/messages.png";
import news from "./img/news.png";
import tasks from "./img/list.png";

const NavWrap = styled.div`
    display: flex;
    align-items:center;
    height: 30px;
    margin-bottom: 20px;
`

export default class NavBar extends Component {
  render() {
    return (
      <div className="navBar_wrap">
        <div className="navBar_list_wrap">
        <img className="navBar_userLogo" src={logo} alt="Logo" />
          <NavWrap>
          <img src={user} alt="user" className="navBar_list_block_img"></img>
            <a href="fff" className="navBar_list_block_text">
              Моя страница
            </a>
          </NavWrap>

          <NavWrap>
          <img src={news} alt="user" className="navBar_list_block_img"></img>
          <a href="fff" className="navBar_list_block_text">
              Новости
            </a>
          </NavWrap>

          <NavWrap>
          <img src={messages} alt="user" className="navBar_list_block_img"></img>
          <a href="fff" className="navBar_list_block_text">
              Сообщения
            </a>
          </NavWrap>

          <NavWrap>
          <img src={tasks} alt="user" className="navBar_list_block_img"></img>
          <a href="fff" className="navBar_list_block_text">
              Задачи
            </a>
          </NavWrap>

          <NavWrap>
          <img src={user} alt="user" className="navBar_list_block_img"></img>
          <a href="fff" className="navBar_list_block_text">
              Уведомления
            </a>
          </NavWrap>
      
        </div>
      </div>
    );
  }
}


