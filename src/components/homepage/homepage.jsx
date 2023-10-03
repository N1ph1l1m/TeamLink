import React  from "react";
import News from "./news/news";
import Todo from "./todo";
import styled from "styled-components";


const HomePageWrap = styled.div`
    max-width: 1100px;
    height: auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

export default class HomePage extends React.Component{
   render(){
    return(
      <HomePageWrap>
          <News/> 
          <Todo/>
      </HomePageWrap>
    )
   }
}