import React from "react";
import axios from "axios";

class EditCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            item:{
                name:"",
                price:"",
                img:""
            }
        }
        this.updateItem = this.updateItem.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount(){
        axios.get("/api/items/"+this.props.match.params.id).then(res=>{
            console.log(res.data[0])
            this.setState({item:res.data[0]})
        })
    }
    updateItem(){
        axios.put("/api/item",this.state.item).then(res=>{
             this.props.history.goBack();
        }).catch(err=>alert(err))
    }
    changeHandler(e){
        let {name,value} = e.target;
        this.setState({item:{
            ...this.state.item,[name]:value
        }});
    }
    deleteItem(){
        axios.delete("/api/item/"+this.state.item.id).then(res=>{
            this.props.history.push("/");
        }).catch(err=>alert(err))
    }
    render(){
        console.log(this.state)
        return(
            <div className="green_box">
                <div className="item_info_container">
                    <img src={this.state.item.img} alt={this.state.item.name}/>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" value={this.state.item.name} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Price: </label>
                        <input type="number" name="price" value={this.state.item.price} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Image URL: </label>
                        <input type="text" name="img" value={this.state.item.img} onChange={this.changeHandler}/>
                    </div>
                </div>
                <div className="btn_container">
                    <button onClick={this.updateItem}>Update</button>
                    <button onClick={()=>this.props.history.goBack()}>Cancel</button>
                    <button onClick={this.deleteItem}>Delete</button>
                </div>
            </div>
        )
    }
}

export default EditCard;