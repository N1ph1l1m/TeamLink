import React from "react";
import "./dialog-list-item.css"
import styled from 'styled-components'
import logo from "../../../routes/./img/logo.png"

const ListItem = styled.div`
    position:absolute;
    width:280px;
    height:70px;
    top:5px;
    left:8px;
    display:flex;
    justify-content:center;
`

 class DialogListItem extends  React.Component{
    render(){
        return(
            <ListItem>
                <div className="dialog_logo">
                    <img src ={logo} alt="logo"></img>
                </div>
                <div className="dialog_text">
                    <span className="dialog_text_title">Peter Parker</span>
                    <span className="dialog_text_message">I am a Spider-man</span>
                </div>
            </ListItem>
            
        )
    }
}
export default DialogListItem;