import React , {Component} from "react";
import styled from "styled-components";
import PhotosForm from "./photosForm/photosForm";

const PhotosWrap = styled.div`
width:780px;
`

export default class Photos extends Component{
    render(){
        return(
            <PhotosWrap>
                <PhotosForm/>
            </PhotosWrap>
        )
    }
}
 