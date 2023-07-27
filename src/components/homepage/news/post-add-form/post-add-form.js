import React, { Component } from "react";
import "./post-add-form.css";
import img from "./img/img.png";
import video from "./img/video.png";
import microphone from "./img/microphone.png";
import music from "./img/music.png";
import styled from "styled-components";

const IconInput = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 16px;
  cursor: pointer;
`;

export default class PostAddForm extends Component {
  render() {
    return (
      <div className="postAddForm-wrapper">
        <div className="postAddForm-item">
          <input
            className="postAddForm-item-inputText"
            type="text"
            placeholder="What are you thinking about now"
          />
          <div className="postAddForm-item-addContent-wrap">
            
            <label for="fileInputImage">
              <IconInput>
                <img src={img} alt="img"></img>
              </IconInput>
            </label>
            <input
              type="file"
              id="fileInputImage"
              className="postAddForm-item-addContent-item-img"
              accept="image/"></input>

            <label for="fileInputVideo">
              <IconInput>
                <img src={video} alt="video"></img>
              </IconInput>
            </label>
            <input
              type="file"
              id="fileInputVideo"
              className="postAddForm-item-addContent-item-img"
              accept="video/"></input>

            <label for="fileInputMicrophone">
              <IconInput>
                <img src={microphone} alt="microphone"></img>
              </IconInput>
            </label>
            <input
              type="file"
              id="fileInputMicrophone"
              className="postAddForm-item-addContent-item-img"
              accept="audio/"></input>

            <label for="fileInputMusic">
              <IconInput>
                <img src={music} alt="music"></img>
              </IconInput>
            </label>
            <input
              type="file"
              id="fileInputMusic"
              className="postAddForm-item-addContent-item-img"
              accept="audio/"></input>

          </div>
        </div>
        <div className="postAddForm-addPost-wrap-button">
          <button className="postAddForm-addPost-item-button">Post</button>
        </div>
      </div>
    );
  }
}