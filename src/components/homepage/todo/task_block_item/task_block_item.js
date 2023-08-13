/* eslint-disable react/jsx-pascal-case */
import React , {Component}from "react";
import "./task_block_item.css"
import styled from 'styled-components'


const TaskBlockITem_wr = styled.div`
        width:268px;
        min-height:90px;
        border:1px solid red; 
        box-sizing: border-box;
    `

export default  class TaskBlockItem  extends Component{
    render (){
        return(
            <TaskBlockITem_wr>
                <h1>Test</h1>
            </TaskBlockITem_wr>
        )
    }
}