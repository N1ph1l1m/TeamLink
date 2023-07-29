import React, {Component} from "react";
import "./post-list-item.css"

//img
import logo from "./img/logo.png"
import like from "./img/heart.png"
//import heartRed from "./img/heartRed.png"
import comments from "./img/comments.png"
import repost from "./img/repost.png"




export default class PostListItem extends Component {
    render(){
        return(
            <>
                <div className="listItem_header_wrap">
                    <div className="listItem_header_item">
                        <img src={logo} alt="logo user"className="listItem_header_img"></img>
                            <div className="listItem_header_label_wrap">
                                <span className="listItem_header_label_text">Peter Parker</span>
                                <span className="listItem_header_label_text time"> 
                                    25.05.23  в 10:10
                                </span>
                            </div>
                    </div>
                </div>

                <div className="listItem_content_wrap">
                    
                </div>

                <div className="listItem_button_wrap">
                    <button className="listItem_button_item">
                        <img src={like} className="listItem_button_item_img" alt="like"/>
                        <span className="listItem_button_label">Нравится</span>
                   </button>
                   <button className="listItem_button_item">
                        <img src={comments} className="listItem_button_item_img" alt="like"/>
                        <span className="listItem_button_label">Комментировать</span>
                   </button>
                   <button className="listItem_button_item">
                        <img src={repost} className="listItem_button_item_img" alt="like"/>
                        <span className="listItem_button_label">Поделиться</span>
                   </button>
                   
                </div>    

            </>
        )
    }
}