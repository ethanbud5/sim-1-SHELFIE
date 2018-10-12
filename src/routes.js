import React from "react";
import {Switch,Route} from "react-router-dom";
import ListItems from "./Components/ListItems";
import EditItem from "./Components/EditItem";
import AddItem from "./Components/AddItem";


export default (
    <Switch>
        <Route exact path="/" component={ListItems}/>
        <Route path="/edit/:id" component={EditItem}/>
        <Route path="/add" component={AddItem}/>
    </Switch>
)