import React, { Component } from "react"

class CardsClases extends Component{
    constructor(props){
        super(props);
        this.state = {
          count: 0,
        }
        this.count2 = 0;

        // Amenta el estado
        this.clickHandler = () => {
          this.setState({count: this.state.count + 1}, () => {
            console.log(this.state.count);
          })
        }

        // Aumenta la variable
        this.clickHandler2 = () => {
          this.count2++
          console.log(this.count2);
        }
    }

    componentDidMount(){
      console.log('Acabo de nacer');
    }

    componentDidUpdate(){
      console.log(this.state.count);
    }

    componentWillUnmount(){
      console.log("No quiero")
    }

    render(){
        return(
          <>
            <h1>Soy un componente de clase</h1>
            <p>{this.props.text}</p>
            <button onClick={this.clickHandler}>Aumentar Estado</button>
            <button onClick={this.clickHandler2}>Aumentar Variable</button>
            <h3>{this.state.count}</h3>
            <h3>{this.count2}</h3>
          </>
        )
    }
}

export default CardsClases