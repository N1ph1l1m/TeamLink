import React from "react";
import styled from "styled-components";
//img
import img from "./img/img.png";
import video from "./img/video.png";
import microphone from "./img/microphone.png";
import music from "./img/music.png";
import docs from "./img/docs.png";


const IconInput = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 16px;
  cursor: pointer;

`;
const PostAddFormWrapper = styled.form`
   margin: 20px auto;
    max-width: 780px;
    height: 193px;
    border-radius: 10px;
    background: #F1F1F1;
    border: 1px solid #E4E4E4;
    box-sizing: border-box;
`
 const PostAddFormItem = styled.div`
     width: 750px;
    height: 117px;
    border-radius: 10px;
    background: #FFF;
    margin: 16px auto;
 `
const ItemInputText = styled.input`
 margin-left: 5px;
    width: 735px;
    min-height: 40px;
    margin-bottom: 30px;
    border-radius: 10px;
    border:1px solid transparent;
    font-size: 14px;
    overflow: scroll;
    outline: none;
`
const ItemAddContentWrap = styled.div`
    width: 250px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
`
const AddContentItemIcon = styled.input`
    display: none;
`
const AddPostWrapButton = styled.div`
  margin-top: -10px;
    width: 760px;
    height: 40px;
    display: flex;
    justify-content: end;
    align-items:center;
`
const AddPostItemButton = styled.button`
    width: 120px;
    height: 40px;
    font-size: 14px;
    font-weight: 900;
    background-color:white;
    color:#3486eb;
    border-radius:10px;
    border: 1px solid #e4e4e4;
    cursor: pointer;
`

export default class PostAddForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onValueChange(e) {
    this.setState({
      text: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.state.text.trim() !== "") {
     // this.props.onAdd(this.state.text);
      this.setState({
        text: "",
      });
      console.log(this.state.text);
    }
  }




  render() {
    return (
      <PostAddFormWrapper 
          onSubmit={this.onSubmit}
          >
        <PostAddFormItem>
          <ItemInputText
            type="text"
            placeholder="What are you thinking about now"
            onChange={this.onValueChange}
          />
          <ItemAddContentWrap>
            
            <label for="fileInputImage">
              <IconInput>
                <img src={img} alt="img"></img>
              </IconInput>
            </label>

            <AddContentItemIcon
              type="file"
              id="fileInputImage"
              accept="image/"></AddContentItemIcon>

            <label for="fileInputVideo">
              <IconInput>
                <img src={video} alt="video"></img>
              </IconInput>
            </label>

            <AddContentItemIcon
              type="file"
              id="fileInputVideo"
              accept="video/"></AddContentItemIcon>

            <label for="fileInputMicrophone">
              <IconInput>
                <img src={microphone} alt="microphone"></img>
              </IconInput>
            </label>

            <AddContentItemIcon
              type="file"
              id="fileInputMicrophone"
              accept="audio/"></AddContentItemIcon>

            <label for="fileInputMusic">
              <IconInput>
                <img src={music} alt="music"></img>
              </IconInput>
            </label>
            <AddContentItemIcon
              type="file"
              id="fileInputMusic"
              accept="audio/"></AddContentItemIcon>

            <label for="fileInputDocs">
              <IconInput>
                <img src={docs} alt="music"></img>
              </IconInput>
            </label>
            <AddContentItemIcon
              type="file"
              id="fileInputDocs"></AddContentItemIcon>

          </ItemAddContentWrap>
        </PostAddFormItem>
        <AddPostWrapButton>
          <AddPostItemButton
            type="submit"
            onChange={this.onSubmit}
        >Post</AddPostItemButton>
        </AddPostWrapButton>
      </PostAddFormWrapper>
    );
  }
}
