import React , {Component} from "react";
import styled from "styled-components";
import PhotoItem from "./photoItem";

const PhotosFormWrap = styled.div`
width:770px;
min-height:258px;
display:flex;
flex-flow: row wrap;
padding:10px;
`
export default class PhotosForm extends Component{
    render(){
        return(
            <PhotosFormWrap>
                <PhotoItem/>
                <PhotoItem/>
                <PhotoItem/>
            </PhotosFormWrap>
        )
    }
}
 