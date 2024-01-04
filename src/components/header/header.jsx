import React from "react";
import  "./header.css"

class Header extends React.Component{
   render(){
    return(
        <div className="header_wrap">
            <div className="header_wrap_logo">
                <h1 className="header_item_logo">
                    TeamLink
                </h1>
            </div>
        </div>
        
    )
   }
}
export default Header;