import React from "react";
import styled from "styled-components";
import PhotoItem from "./photoItem/photoItem";

const PhotosFormWrap = styled.div`
margin-top:4px auto;
width:770px;
min-height:258px;
display:flex;
flex-flow: row wrap;
justify-content: center;
`
class PhotosForm extends React.Component{
    render(){
        return(
            <PhotosFormWrap>
                <PhotoItem/>
                <PhotoItem/>
                <PhotoItem/>
                <PhotoItem/>
                <PhotoItem/>
                <PhotoItem/>
                <PhotoItem/>
                <PhotoItem/>
                <PhotoItem/>
                <PhotoItem/>
                <PhotoItem/>
                <PhotoItem/>
            </PhotosFormWrap>
        )
    }
}
export default PhotosForm;