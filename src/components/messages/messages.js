import React,{Component} from "react";
import DialogList from "./dialog-list/dialog-list";
import SearchDialog from "./serch-dialogs/search-dialogs"
import "./messages.css"
import styled from 'styled-components'


const MessagesWrap = styled.div`
    width: 1000px;
    height: 705px;
    border: 1px solid #E4E4E4;
    color: rgb(12, 11, 11);
    display:flex;
    `
const SelectDialogWrap = styled.div`
    width:300px;
    min-height:705px;
    border:1px solid #E4E4E4;
    `
const ChatWrap = styled.div`
    width:700px;
    height:705px;
    `



export default class Messages extends Component{
    render(){
        return(
          <MessagesWrap>
            <SelectDialogWrap>
                <SearchDialog/>
                <DialogList/>
            </SelectDialogWrap>
            <ChatWrap>
        
            </ChatWrap>
          </MessagesWrap>
        )
    }
}
