import React  from "react";
import styled from "styled-components";
//img
import logo from "./img/logo.png";
import like from "./img/heart.png";
//import heartRed from "./img/heartRed.png"
import comments from "./img/comments.png";
import repost from "./img/repost.png";

const HeaderWrap = styled.div`
width: 730px;
  height: 56px;
`
const HeaderItem = styled.div`
  margin-top: 7px;
  margin-left: 15px;
  width: 220px;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`
const HeaderImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.771);
`
const HeaderLabelWrap = styled.div`
 margin-left: 8px;
  width: 140px;
  height: 40px;
  display: flex;
  flex-flow: column;
`
const HeaderLabelName = styled.span`
  color: black;
  font-family: Rubik;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
const HeaderTime = styled.span`
 color: gray;
  font-family: Rubik;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 5px;
`
const ContentWrap = styled.div`
  width: 700px;
  min-height: 100px;
  margin-left: 15px;
`
const FooterWrap = styled.div`
  width: 777px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const FooterButton = styled.button`
  min-width: 100px;
  height: 25px;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  justify-content: center;
`
const FooterButtonIcon = styled.img`
  margin: -2px -6px;
`
const ButtonLabel = styled.span`
 margin-left: 10px;
  font-size: 14px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export default class PostListItem extends React.Component {
  render() {
    return (
      <>
        <HeaderWrap>
          <HeaderItem>
            <HeaderImg
              src={logo}
              alt="logo user"></HeaderImg>
            <HeaderLabelWrap>
              <HeaderLabelName>Peter Parker</HeaderLabelName>
              <HeaderTime>
                25.05.23 в 10:10
              </HeaderTime>
            </HeaderLabelWrap>
          </HeaderItem>
        </HeaderWrap>

       <ContentWrap>
        
       </ContentWrap>

        <FooterWrap>
          <FooterButton>
            <FooterButtonIcon 
              src={like} 
              alt="like" />
            <ButtonLabel>Нравится</ButtonLabel>
          </FooterButton>

          <FooterButton>
            <FooterButtonIcon
              src={comments}
              alt="like"
            />
            <ButtonLabel>Комментировать</ButtonLabel>
          </FooterButton>

          <FooterButton>
            <FooterButtonIcon 
              src={repost} 
              alt="like" />
            <ButtonLabel>Поделиться</ButtonLabel>
          </FooterButton>
        </FooterWrap>
      </>
    );
  }
}
