import React  , {Component}from "react";
import styled from "styled-components";
import Todo from "../homepage/todo";
import MyContentNav from "./myContentNav/myContentNav";
import  PostAddForm from '../homepage/news/post-add-form/post-add-form'
import './myPage.css'
import avatar from '../../routes/img/samurai.png'
import cover from '../../routes/img/cover.jpg'



const MyPageMainWrap = styled.div`
    max-width: 1100px;
    height: auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;


// const NewsWrap = styled.div`
//     width: 800px;
//     min-height: 1000px;
//     border: 1px solid #E4E4E4;
//     color: rgb(12, 11, 11);

//     `
const MyPageWrap = styled.div`
     width: 800px;
     min-height: 1000px;
    color: rgb(12, 11, 11);
`

const MyPageHeader = styled.div`
    margin:20px auto;
    width:780px;
    background-color: white;
    border-radius: 10px;
    height: 300px;
    border: 1px solid #e4e4e4;
`;


export default class MyPage extends Component{
    render(){
        return(
         <MyPageMainWrap>
            <MyPageWrap>
                <MyPageHeader>
                    <img
                        className="myPage_background"
                        src={cover} alt="cover"/>
                    <div className="myPage_profileWrap">
                        <img
                            className="myPage_profile_Avatar"
                            src={avatar}
                            alt="avatar"/>
                        <div className="myPage_profileItem">
                            <div className="myPage_profileItem_user">
                                <h2 className="user_name">Piter Parker</h2>
                                <span className="user_status">Profile status</span>
                            </div>
                            <div className="myPage_profileItem_buttons">
                                <button className="buttons_editProfile">
                                Edit profile
                                </button>
                                <button className="buttons_editProfile">
                                Share
                                </button>
                            </div>
                        </div>
                    </div>  
                </MyPageHeader>
                <PostAddForm/>
                <MyContentNav/>
            </MyPageWrap>
            <Todo/>
         </MyPageMainWrap>

        )
    }
}