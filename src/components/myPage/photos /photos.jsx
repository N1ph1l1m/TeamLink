import React from "react";
import styled from "styled-components";
import PhotosForm from "./photosForm/photosForm";

const PhotosWrap = styled.div`
width:780px;
`

class Photos extends React.Component{
    render(){
        return(
            <PhotosWrap>
                <PhotosForm/>
            </PhotosWrap>
        )
    }
}
export default Photos