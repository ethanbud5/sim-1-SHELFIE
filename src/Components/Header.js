import React from "react";
import shelfie_icon from "./../images/shelfie_icon.png";
import Button from "./Button";

function Header(props){
    console.log(props)
    return(
        <div className="header_container">
            <img src={shelfie_icon} alt="Logo"/>
            <div className="main_title">Shelfie</div>
            <Button location="/" btnText="Dashboard"/>
            <Button location="/add" btnText="Add Inventory"/>
        </div>
    )
}

export default Header;