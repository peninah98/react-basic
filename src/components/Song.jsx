import { Component } from "react";

class Song extends Component{
    
    render(){
        return <p>Songs :  {this.props.favourites}</p>
    }
}

export default Song