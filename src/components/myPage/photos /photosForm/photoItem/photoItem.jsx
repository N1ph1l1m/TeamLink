import React from "react";
import styled from "styled-components";
import photo from '../../../../../routes/img/cover.jpg'


const PhotosItemWrap = styled.div`
width:240px;
height:200px;
border: 1px solid #e4e4e4;
${'' /* border: 1px solid black; */}
border-radius:3px;
margin:5px 2px;
`
const PhotosItemImg = styled.img`
width:240px;
height:200px;
border-radius:3px;

`
class PhotoItem extends React.Component{
    render(){
        return(
            <PhotosItemWrap>
            <PhotosItemImg src={photo} alt="photo"></PhotosItemImg>
            </PhotosItemWrap>
        )
    }
}
export default PhotoItem;