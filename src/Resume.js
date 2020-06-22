import React from 'react';
import data from'./data.json';
import profileIcon from './profile.svg';
   
export default function Resume(props){
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response=>response.json())
	.then(data=>console.log(data))
	let info=data.profile[props.location.data.id]
	console.log(info basics.name)
		}
	return(
		fetch()
		<div className="row justify-content-center">
			<div className="col-lg-3 m-2">
				<div className="card shadow">
					
					<div>
						<img src={profileIcon} alt="profile Icon" style={{width:"30%"}} /
						<h2>{info.basics.name}</h2>
						<h4>className="text-secondary">{info.basics.role}</h4>
						<a href={"tel:"+info.basics.phone}>
						<h4>{info.basics.phone}</h4>
						</a>
						<a href={"mailto:+"info.basics.email}>
						<h4>{info.basics.email}</h4>
						</a>
					</div>
				</div>
			</div>
			<div className="col-lg-8 m-2">
				<div className="card shadow">
				<div className="card-body">
					<h2>Career Objective:</h2>
					<hr/>
					<p>{info.career}</p>
					<h2>Education:</h2>
					<p>{info.education.btech}</p>
					<p>{info.education.Inter}</p>
					<p>{info.education.Xth}</p>
					<h2>co-circullar</h2>
					<p>{info.co-circular}</p>
				</div>
			</div>
		</div>
		)
}