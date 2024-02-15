import React, { Component } from 'react'

 class Subash extends Component {
    constructor(){
        super()
        this.state={
            message:'subashhh'
        }
    }
    changeMessage(){
       this.setState({
            message:'SCB'
       })
    }
  
        
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage.bind(this)}>change</button>
      </div>
    )
  }
}

export default Subash
