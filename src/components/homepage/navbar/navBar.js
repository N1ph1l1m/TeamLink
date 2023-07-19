import React, { Component } from "react";
import "./navBar.css";
import logo from "./img/logoUser.png";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navBar_wrap">
        <img className="navBar_userLogo" src={logo} alt="Logo" />
        <div className="navBar_list_wrap">
          <a href="fff" className="navBrar_list_item">
            Моя страница
          </a>
          <a href="fff" className="navBrar_list_item">
            Новости
          </a>
          <a href="fff" className="navBrar_list_item">
            Сообщения
          </a>
          <a href="fff" className="navBrar_list_item">
            Группы
          </a>
          <a href="fff" className="navBrar_list_item">
            Задачи
          </a>
          <a href="fff" className="navBrar_list_item">
            Уведомления
          </a>
        </div>
      </div>
    );
  }
}
