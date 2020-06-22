import React, {Component} from 'react'

export default class Counter extends Component{
	constructor(){
		super();
		this.state={
			counter:"0"
		}
	}
	increment(){
		this.setState(
			{this.state.counter: this.state.counter+1}
			);
	}
	render(){
		return(
			<div>
			<h1>{this.state.message}</h1>
			<button onClick={()=>this.increment()}>increment</button>
			</div>
			)
	}
}

export default Counter;