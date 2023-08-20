import styled from "styled-components";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./root.css";

//img
import logo from "./img/logo.png";
import user from "./img/user.png";
import messages from "./img/message.png";
import news from "./img/news.png";
import tasks from "./img/tasks.png";
import notification from "./img/notification.png";
import calendar from "./img/calendar.png";
import docs from "./img/docs.png";
import groups from "./img/groups.png";

const NavWrap = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 20px;
`;

export default function Root() {
  return (
    <>
      <div className="navBar_wrap">
        <div className="navBar_list_wrap">
          <img className="navBar_userLogo" src={logo} alt="Logo" />
          <NavWrap>
            <img src={user} alt="user" className="navBar_list_block_img"></img>
            <Link to="/profile" className="navBar_list_block_text">
              My profile 
            </Link>
          </NavWrap>

          <NavWrap>
            <img src={news} alt="user" className="navBar_list_block_img"></img>
            <Link to="/news" className="navBar_list_block_text">
              News
            </Link>
          </NavWrap>

          <NavWrap>
            <img src={tasks} alt="user" className="navBar_list_block_img"></img>
            <Link to="/" className="navBar_list_block_text">
              Tasks
            </Link>
          </NavWrap>

          <NavWrap>
            <img
              src={messages}
              alt="user"
              className="navBar_list_block_img"
            ></img>
            <Link to="/message" className="navBar_list_block_text">
              Messenger
            </Link>
          </NavWrap>

          <NavWrap>
            <img
              src={notification}
              alt="user"
              className="navBar_list_block_img"
            ></img>
            <Link to="/" className="navBar_list_block_text">
              Notification
            </Link>
          </NavWrap>

          <NavWrap>
            <img
              src={calendar}
              alt="user"
              className="navBar_list_block_img"
            ></img>
            <Link to="/" className="navBar_list_block_text">
              Calendar
            </Link>
          </NavWrap>

          <NavWrap>
            <img src={docs} alt="user" className="navBar_list_block_img"></img>
            <Link to="/" className="navBar_list_block_text">
              Documents
            </Link>
          </NavWrap>
          <NavWrap>
            <img src={groups} alt="/" className="navBar_list_block_img"></img>
            <Link to="/" className="navBar_list_block_text">
              Communities
            </Link>
          </NavWrap>
        </div>
        <div  className="outlet_Block"id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}
