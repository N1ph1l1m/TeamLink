import React, {Component} from "react";
import TaskBlock from "./task_block";

import styled from 'styled-components'

const TodoWR = styled.div`
          width: 300px;
          height: 1000px;
          border:2px solid rgb(0, 255, 204);
          margin-right: 10px;
    `



export default class Todo extends Component{
   render(){
    return(
      <TodoWR>
       <TaskBlock/>
       <TaskBlock/>
      </TodoWR>
      
    )
   }
}