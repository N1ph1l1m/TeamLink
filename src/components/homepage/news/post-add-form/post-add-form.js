import React,{Component} from "react";
import "./post-add-form.css"
import  img from "./img/img.png"
import  video from "./img/video.png"
import  microphone from "./img/microphone.png"
import  music from "./img/music.png"


export default class PostAddForm extends Component{
    render(){
        return(
            <div className="postAddForm-wrapper">
                <div className="postAddForm-item">
                <input
                    className="postAddForm-item-inputText"
                    type="text"
                    placeholder="What are you thinking about now"
                    />
                <div className="postAddForm-item-addContent-wrap">
                    <img src={img} alt="img" className="postAddForm-item-addContent-img">
                    </img>
                    <img src={video} alt="img" className="postAddForm-item-addContent-img">
                    </img>
                    <img src={microphone} alt="img" className="postAddForm-item-addContent-img">
                    </img>
                    <img src={music} alt="img" className="postAddForm-item-addContent-img">
                    </img>
                </div>
                </div>
                <div className="postAddForm-addPost-wrap-button">
                <button 
                className="postAddForm-addPost-item-button">
                    Post
                </button>
                </div>
            
            </div>
             
            
        )
    }
}