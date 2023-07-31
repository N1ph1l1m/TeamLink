import React, { Component } from "react";
import "./search-dialogs.css";
import styled from "styled-components";
import search from "./icons/search.png";
import closeSearch from "./icons/close-search.png";

const SearchWrap = styled.div`
  width: 298px;
  height: 50px;
  color: rgb(12, 11, 11);
  margin: 0px auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #e4e4e4;
  }
`;

export default class SearchDialog extends Component {
  render() {
    return (
      <SearchWrap>
        <img src={search} alt="search" className="search_img" />
        <div>
          <input type="text" className="search_input" placeholder="Поиск" />
        </div>
        <button className="search_button_closeSearch">
          <img src={closeSearch} alt="search" className="search_img" />
        </button>
      </SearchWrap>
    );
  }
}
