import React from 'react';
//useState---->Hook
//states--->initialization-->this.state
//manipulating states--->this.setState()
/*let StatesConcept=()=>{
	const [count,changecount]=useState(0/*["thanuja","asritha","teja"]*/);
	/*return(
		<div style={{textAlign:"center"}}>
		/*<h2>{count.map(i=>(
			<span>{i}<br/></span>
			))}</h2>*/
			/*<h2>{count}</h2>
			<button onClick={()=>(changeCount(count+1))}>increase</button>
		</div>		
		)
}

/*class StateConcept extends Component{
	/*constructor(){
		super();
		this.state={
			count:0
		}
	}
	increase=()=>{
		this.setState({
			count:this.state.count+1
		})
	}

	decrease=()=>{
		this.setState({
			count:this.state.count-1
		})
	}
	render(){
		return(
			<div>
			<h2 style={{textAlign:"center"}}> {this.state.count}</h2>
			<button onClick={this.increase}>increase</button>
			<button onClick={this.decrease}>decrease</button>

			</div>
			)
	}
}*/
class StateConcept extends React.Component{
	render(){
		return(
			<div>
			<h2>{this.props.name} is {this.props.age} years old.</h2>
			
			)
	}
}
export default StatesConcept;