import { Component } from "react";

class Form extends Component{
    state = {
        firstname :" ",
        lastname : ""
    }
    handleChange = (event) =>{
        this.setState({
            firstname : event.target.value
        
        })
        console.log(this.state.firstname);
    }

    lastnameChange =(event) =>{
        this.setState({
            lastname: event.target.value
        })

        console.log(this.state.lastname)
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        console.log({
            fname : this.state.firstname,
            lname : this.state.lastname
        });
    }
    render(){
        return (
            <div>
                <h2>Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                     onChange={this.handleChange}
                      type="text" 
                      value={this.state.firstname}>  
                    </input>

                    <input
                     type = "text"
                      onChange={this.lastnameChange}
                      value={this.state.lastname}>
                    </input>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )

    }
}


export default Form