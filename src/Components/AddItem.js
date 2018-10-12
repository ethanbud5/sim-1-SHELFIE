import React from "react";
import axios from "axios";

class AddItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            item:{
                name:"",
                price:"",
                img:""
            }
        }
        this.addItem = this.addItem.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    addItem(){
        axios.post("/api/item",this.state.item).then(res=>{
             this.props.history.push("/");
        }).catch(err=>alert(err))
    }
    changeHandler(e){
        let {name,value} = e.target;
        this.setState({item:{
            ...this.state.item,[name]:value
        }});
    }
    render(){
        console.log(this.state)
        return(
            <div className="green_box">
                <div className="item_info_container">
                    <img src={this.state.item.img||"https://via.placeholder.com/350x150?text=PLACEHOLDER+IMAGE"} alt={this.state.item.name}/>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" value={this.state.item.name} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Price: </label>
                        <input type="number" name="price" value={(this.state.item.price)} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Image URL: </label>
                        <input type="text" name="img" value={this.state.item.img} onChange={this.changeHandler}/>
                    </div>
                </div>
                <div className="btn_container">
                <button onClick={this.addItem}>Create</button>
                <button onClick={()=>this.props.history.goBack()}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default AddItem;