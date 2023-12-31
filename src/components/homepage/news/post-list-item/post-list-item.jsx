import React from "react";
import styled from "styled-components";
//img
import logoImg from "./img/logo.png";
import likeImg from "./img/heart.png";
//import heartRed from "./img/heartRed.png"
import commentsImg from "./img/comments.png";
import repost from "./img/repost.png";
import more from '../../../myPage/followers/followersItem/more.png'

const HeaderWrap = styled.div`
  width: 730px;
  height: 56px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  ${'' /* border:1px solid green; */}
  margin:0px auto;
`
const HeaderItem = styled.div`
  margin-top: 7px;
  ${'' /* margin-left: 15px; */}
  width: 220px;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  ${'' /* border:1px solid red; */}
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
const HeaderMore = styled.button`
    margin-top:5px;
    width: 25px;
    height: 20px;
    position:relative;
    border-radius:30px;
    background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
`
const MoreItem = styled.img`
width:25px;
height:25px;
margin-left:-5px;
margin-top:-3px;
`
const ContentWrap = styled.div`
  width: 700px;
  min-height: 100px;
  margin-left: 30px;
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
const ContentText = styled.span`
font-size:16px;
text-align:justify;
`
// const BlockHandler = styled.div`
// width:10px;
// heart:10px;
// border:1px solid red;`

class PostListItem extends React.Component {

  
  handleMouseEnter = () => {
    console.log('Мышь вошла!');  
  }
  handleMouseLeave = () => {
    console.log('Мышь ушла!');
   
  }
  render() {
    const {
            label,
            onToggleLiked,
            onToggleComment,
            onToggleRepost,
          } = this.props;
    return (
      <>
        <HeaderWrap>
          <HeaderItem>
            <HeaderImg
              src={logoImg}
              alt="logo user"></HeaderImg>
            <HeaderLabelWrap>
              <HeaderLabelName>Peter Parker</HeaderLabelName>
              <HeaderTime>
                25.05.23 в 10:10
              </HeaderTime>
            </HeaderLabelWrap>
          </HeaderItem>
          <HeaderMore>
            <MoreItem  onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} src={more} alt="more"/>
          </HeaderMore>
        </HeaderWrap>

       <ContentWrap>
        <ContentText>{label}
          </ContentText>
       
       </ContentWrap>

        <FooterWrap>
          <FooterButton
              onClick={onToggleLiked}>
            <FooterButtonIcon  
              src={likeImg} 
              alt="like"/>
            <ButtonLabel>Нравится</ButtonLabel>
          </FooterButton>

          <FooterButton
          onClick={onToggleComment}>
            <FooterButtonIcon
              src={commentsImg}
              alt="like"
            />
            <ButtonLabel>Комментировать</ButtonLabel>
          </FooterButton>

          <FooterButton
           onClick={onToggleRepost}>
            <FooterButtonIcon 
              src={repost} 
              alt="like" 
              />
            <ButtonLabel>Поделиться</ButtonLabel>
          </FooterButton>
        </FooterWrap>
      </>
    );
  }
}
export default PostListItem;