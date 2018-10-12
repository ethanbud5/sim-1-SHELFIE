import React, { Component } from 'react';
import axios from "axios"
import {Link} from "react-router-dom"

class ListItems extends Component {
    constructor(props){
        super(props)
        this.state = {
            inventory:[]
        }
    }
    componentDidMount(){
        axios.get("/api/inventory").then(res=>{
            this.setState({inventory:res.data})
        })
    }
  render() {
      console.log(this.state)
        let ListItems = this.state.inventory.map(item=>(
            <Link key={item.id} to={"/edit/"+item.id}>
            <div  className="item_card">
                    <img src={item.img} alt={item.name}/>
                    <div>
                        <p>{item.name}</p>
                        <p>${(item.price).toFixed(2)}</p>
                    </div>
            </div>
                </Link>
        ))
    return (
        <div className="list_container">
            {ListItems}
        </div>
    );
  }
}

export default ListItems;
