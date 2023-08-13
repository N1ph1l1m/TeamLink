import React , {Component} from "react";
import TaskBlockItem from "../task_block_item/task_block_item";
import styled from 'styled-components'

const TaskBlockWR = styled.div`
        width: 280px;
        min-height:100px;
        border:1px solid purple;
        margin:0px auto;
        margin-top:20px;
        display:flex;
        justify-content: center;
        box-sizing: border-box;
        padding:5px;
    `
    

export default class TaskBlock extends Component{
    render(){
        return(
           <TaskBlockWR>
                <TaskBlockItem/>
           </TaskBlockWR>
        )
    }
}