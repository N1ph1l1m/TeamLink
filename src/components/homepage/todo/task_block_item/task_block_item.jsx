/* eslint-disable react/jsx-pascal-case */
import React  from "react";
import "./task_block_item.css"
import styled from 'styled-components'


const TaskBlockITem_wr = styled.div`
        width:268px;
        ${'' /* border:1px solid red;  */}
        box-sizing: border-box;
    `

export default  class TaskBlockItem  extends React.Component{
    render (){
        return(
            <TaskBlockITem_wr>
                <div className="title_Block">
                    <span className="title_Block_item">Test</span>
                </div>    
                <div className="task_Block">
                    <form>
                        <ul>
                            <li> 
                                <input type="checkbox" name="task1"/>
                                <label for="vehicle1"> Create design </label>
                            </li>
                            <li>
                                <input type="checkbox" name="task2"/>
                                <label for="vehicle2"> Create  Frontend</label>
                            </li>
                            <li>
                                <input type="checkbox" name="task3"/>
                                <label for="vehicle3"> Create Backend</label>
                            </li>
                            
                        </ul>
                    
                    </form>
                </div>               
            </TaskBlockITem_wr>
        )
    }
}