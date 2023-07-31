import React,{Component} from "react";
import "./messages.css"
import styled from 'styled-components'


const MessagesWrap = styled.div`
    width: 1000px;
    min-height: 1000px;
    border: 1px solid #E4E4E4;
    color: rgb(12, 11, 11);
    `


export default class Messages extends Component{
    render(){
        return(
          <MessagesWrap>

          </MessagesWrap>
        )
    }
}
