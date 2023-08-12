import React , {Component} from "react";
import styled from 'styled-components'

const TaskBlockWR = styled.div`
        width: 280px;
        height:100px;
        border:1px solid purple;
        margin:0px auto;
        margin-top:20px;
        background-color:yellow;
    `

export default class TaskBlock extends Component{
    render(){
        return(
           <TaskBlockWR/>
        )
    }
}