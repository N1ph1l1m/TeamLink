import React , {Component} from "react";
import "./dialog-list.css"
import styled from 'styled-components'


const DialogListWrap = styled.div`
    width: 298px;
    height: 85px;
    color: rgb(12, 11, 11);
    margin:0px auto;
    position:relative;
    
    &::before {
        content: ''; /* Обязательное свойство для псевдоэлементов */
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #E4E4E4; /* Цвет верхнего бордера */
    }
    &::after {
        content: ''; /* Обязательное свойство для псевдоэлементов */
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #E4E4E4; /* Цвет нижнего бордера */
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