import React, { Component } from "react";
import styled from 'styled-components'
import "./navBar.css";
import {Routes,Route,Link} from 'react-router-dom';
import Messages from "../messages";

//img
import logo from "./img/logo.png";
import user from "./img/user.png";
import messages from "./img/message.png";
import news from "./img/news.png";
import tasks from "./img/tasks.png";
import notification from "./img/notification.png"
import calendar from "./img/calendar.png"
import docs from "./img/docs.png"
import groups from "./img/groups.png"
import News from "../homepage/news/news";

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
            <Link to="/" className="navBar_list_block_text">
              Моя страница
            </Link>
          </NavWrap>

          <NavWrap>
          <img src={news} alt="user" className="navBar_list_block_img"></img>
          <Link to="/news" className="navBar_list_block_text">
              Новости
            </Link>
          </NavWrap>

          <NavWrap>
          <img src={tasks} alt="user" className="navBar_list_block_img"></img>
          <Link to="/news" className="navBar_list_block_text">
              Задачи
            </Link>
          </NavWrap>

          <NavWrap>
          <img src={messages} alt="user" className="navBar_list_block_img"></img>
          <Link to="/message" className="navBar_list_block_text">
              Сообщения
            </Link>
          </NavWrap>

          <NavWrap>
          <img src={notification} alt="user" className="navBar_list_block_img"></img>
          <Link to="/news" className="navBar_list_block_text">
              Уведомления
            </Link>
          </NavWrap>

          <NavWrap>
          <img src={calendar} alt="user" className="navBar_list_block_img"></img>
          <Link to="/news" className="navBar_list_block_text">
              Календарь
            </Link>
          </NavWrap>

          <NavWrap>
          <img src={docs} alt="user" className="navBar_list_block_img"></img>
          <Link to="/news" className="navBar_list_block_text">
              Документы
            </Link>
          </NavWrap>

          <NavWrap>
          <img src={groups} alt="user" className="navBar_list_block_img"></img>
          <Link to="/news" className="navBar_list_block_text">
              Группы
            </Link>
          </NavWrap>
        </div>
        <Routes>
          <Route path="/news" element={<News/>}/>
          <Route path="/message" element={<Messages/>}/>
        </Routes>
      </div>
     
    );
  }
}


