import React from "react";
import styled from "styled-components";


const PhotosItemWrap = styled.div`
width:240px;
height:200px;
${'' /* border: 1px solid #e4e4e4; */}
border: 1px solid black;
border-radius:10px;
margin-right:10px;
margin-bottom:10px;
`
export default class PhotoItem extends React.Component{
    render(){
        return(
            <>
            <PhotosItemWrap/>
            </>
        )
    }
}