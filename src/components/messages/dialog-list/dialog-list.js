import React , {Component} from "react";
import "./dialog-list.css"
import styled from 'styled-components'
import SearchDialog from "../serch-dialogs/search-dialogs";


const DialogListWrap = styled.div`
    width: 298px;
    height: 85px;
    color: rgb(12, 11, 11);
    margin:0px auto;
    position:relative;

    &::before {
        content: ''; 
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #E4E4E4; 
    }
    &::after {
        content: ''; 
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #E4E4E4;
    }
    `

export default class DialogList extends  Component{
    render(){
        return(
           <DialogListWrap>

           </DialogListWrap>
        )
    }
}