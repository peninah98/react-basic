import { Component } from "react";

class ClassEvent extends Component{
     handleEvent(){
        console.log("class event button is clicked");
    }
    render(){
        return <div>
            <button onClick={this.handleEvent}>Click Meeee!</button>
        </div>
    }
}

export default ClassEvent