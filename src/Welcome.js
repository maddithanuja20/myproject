import React from "react";

/*class Welcome extends React.Components{
	render(){
	return(<h1>Welcome</h1>)
}
}*/	
let Welcome=(props)=>{
	//props can't change....
	/*this.props={
		name: "hello props.."
	}*/
	return(<h1>Welcome{props.name}</h1>)

}
export default Welcome;