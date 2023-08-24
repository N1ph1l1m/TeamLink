import React , {Component} from "react";
import Followers from "../followers";
import News from "../../homepage/news/news";
import Likes from "../likes/likes";
import styled from "styled-components";
import Photos from "../photos /photos";

const ContentNav = styled.div`
    margin:0px auto;
    width:780px;
    min-height:800px;
    border:1px solid #e4e4e4;
    border-radius:10px;
    display:flex;
    flex-direction: column; 
`
const NavWrap = styled.div`
width:780px;
height:40px;
display: flex;
flex-direction: row;
border-radius:10px;
border-bottom:3px solid #e4e4e4;
z-index:1;
`
//   border-bottom:3px solid #3486eb;
const NavItem = styled.div`
  margin-top:10px;
  height: 30px;
  display:flex;
  margin-right:40px;
  align-items:end;
  z-index:2;
  border-bottom:3px solid #e4e4e4;
  &:first-child{
    margin-right:40px;
    margin-left:10px;
  }

`;
const NavButton = styled.div`
    color:#3486eb;
    text-decoration: none;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border:0px solid transparent;
    background-color:transparent;
    &:hover{
        cursor: pointer;
    }
// `
const NewsWrap = styled.div`
  width:770px;
  height:auto;
  margin:0px auto;
  margin-bottom:10px;
`
export default class MyContentNav extends Component{

  constructor(props){
    super(props);
    this.state = {
        show:1,
    }
     this.showFolow = this.showFolow.bind(this);
     this.showLikes = this.showLikes.bind(this);
     this.showNews = this.showNews.bind(this);
     this.showPhotos = this.showPhotos.bind(this);
}

 showFolow(){
    this.setState(numItem =>({
      show: numItem = 1
    }));
  }
  showLikes(){
    this.setState(numItem =>({
      show: numItem = 2 
    }))
  }
  showNews(){
    this.setState(numItem =>({
      show: numItem = 3
    }));
  }
  showPhotos(){
    this.setState(numItem =>({
      show: numItem = 4
    }));
  }

  showElements = () => {
    if(this.state.show === 1){
      return(
      <Followers/>
      )
    }else if(this.state.show === 2){
      return(
        <Likes/>
      )
    }
    else if(this.state.show === 3){
      return(
        <NewsWrap>
            <News/>
        </NewsWrap>
      )
    }
    else if(this.state.show === 4){
      return(
        <Photos/>
      )
    }
  }

  render(){
    const show = this.showElements();
    return (
          <ContentNav>
            <NavWrap>
              <NavItem>
                <NavButton onClick={this.showFolow}> Followers </NavButton>
              </NavItem>
              <NavItem>
                <NavButton onClick={this.showLikes}> Likes </NavButton>
              </NavItem>
              <NavItem>
                <NavButton onClick={this.showNews}> Posts </NavButton>
              </NavItem>
              <NavItem>
                <NavButton onClick={this.showPhotos}>Photos</NavButton>
              </NavItem>
            </NavWrap>
          {show}
          </ContentNav>
        );
  }
}