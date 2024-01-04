import React from "react";
import TaskBlock from "./task_block/task_block";

import styled from 'styled-components'

const TodoWR = styled.div`
          width: 300px;
          margin-right: 10px;
    `
 class Todo extends React.Component{
   render(){
    return(
      <TodoWR>
       <TaskBlock/>
       <TaskBlock/>
      </TodoWR>
      
    )
   }
}

export default Todo;