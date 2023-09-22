import { Component } from "react";

class Resume extends Component{
    render(){
        const { category } = this.props
        return <p>This is class components of Resume : {category}</p>
    }
}

export default Resume