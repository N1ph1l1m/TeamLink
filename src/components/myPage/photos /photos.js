import React , {Component} from "react";
import styled from "styled-components";
import PhotosForm from "./photosForm/photosForm";

const PhotosWrap = styled.div`
width:780px;
min-height:800px;
display:flex;
flex-flow: column nowrap;
border:1px solid red;
align-items:center;
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
 