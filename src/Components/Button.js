import React from "react";
import {Link} from "react-router-dom";

function Button(props){

    return(
        <div>
            <Link to={props.location}><button className="nav_btn">{props.btnText}</button></Link>
        </div>
    )
}

export default Button;