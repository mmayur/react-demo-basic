// // // // import React , {Component} from 'react';
// // // // import './App.css';
// // // // import {CardList} from './components/Card-list/card-list.component';
// // // // import {SearchBox} from './components/Search-box/search-box.component';

// // // // class App extends Component {
// // // //   constructor(){
// // // //     super();
// // // //     this.state = {
// // // //       hros : [],
// // // //       searchInput : ''
// // // //     }
// // // //     //this.handleChange = this.handleChange.bind(this);
// // // //   }
// // // // handleChange = (e) => {
// // // //   this.setState({searchInput : e.target.value});
// // // // }
// // // // componentDidMount() {
// // // //     fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(user => {this.setState({hros:user})})
// // // //   }
// // // // render() {
// // // //   const {hros,searchInput} = this.state;
// // // //   console.log("heroes...", hros);

// // // //   const filteredHeroes = hros.filter(hero => hero.name.toLowerCase().includes(searchInput.toLowerCase()));
// // // //     return (
// // // //       <div className="App">
// // // //         <SearchBox placeholder='Search Hero' handleChange={this.handleChange}></SearchBox>
// // // //         {/* <input type='text' placeholder='search our hero' onChange={e=>{this.setState({searchInput : e.target.value}, () => console.log(this.state))}}></input> */}
// // // //        <CardList hros={filteredHeroes} />
// // // //        <SearchBox placeholder='hohoho...' handleChange={e=> {console.log('re-used state',e.target.value)}} />
// // // //      </div>
// // // //     );
// // // //   }
// // // // }

// // // // export default App;

// // import React from "react";
// // import Chip from "@material-ui/core/Chip";
// // import Autocomplete from "@material-ui/lab/Autocomplete";
// // import TextField from "@material-ui/core/TextField";
// // import { Select } from "@material-ui/core";

// // export default class Tags extends React.Component {
// // 	constructor(props) {
// // 		super(props);
// // 		this.state = {
// // 			tags: [],
// // 		};
// // 		this.onTagsChange = this.onTagsChange.bind(this);
// // 	}

// // 	onTagsChange = (event, values) => {
// // 		event.preventDefault();
// // 		// alert("isData selected");
// // 		// let d = true;
// // 		// if (d) {
// // 		// 	this.setState(
// // 		// 		{
// // 		// 			tags: values,
// // 		// 		},
// // 		// 		() => {
// // 		// 			// This will output an array of objects
// // 		// 			// given by Autocompelte options property.
// // 		// 			console.log(this.state.tags);
// // 		// 		}
// // 		// 	);
// // 		// 	top100Films = top100Films.filter(
// // 		// 		(o) => this.state.tags.indexOf(o) === -1
// // 		// 	);

// // 		// 	console.log("top100Films ....", top100Films);
// // 		// } else {
// // 		// 	alert("no data");
// // 		// }
// // 		this.setState(
// // 			{
// // 				tags: values,
// // 			},
// // 			() => {
// // 				// This will output an array of objects
// // 				// given by Autocompelte options property.
// // 				//	console.log(this.state.tags);
// // 				//return <div>Hi..</div>;
// // 			}
// // 		);

// // 		// top100Films = top100Films.filter(
// // 		//   (o) => this.state.tags.indexOf(o) === -1
// // 		// );

// // 		//console.log("top100Films ....", top100Films);
// // 	};

// // 	render() {
// // 		return (
// // 			<div>
// // 				<div style={{ width: 500 }}>
// // 					<Autocomplete
// // 						multiple
// // 						options={top100Films}

// // 						getOptionLabel={(option) => option.title}
// // 						defaultValue={[top100Films[13]]}
// // 						onChange={this.onTagsChange}
// // 						onInputChange={(e) => console.log(e.target)}
// // 						onChange={(e) => console.log("change", e.target)}
// // 						filterSelectedOptions
// // 						clearOnBlur
// // 						forcePopupIcon
// // 						// getOptionLabel={(x) => "mayur"}
// // 						onOpen={() => console.log("opened")}
// // 						renderInput={(params) => (
// // 							<TextField
// // 								{...params}
// // 								variant="standard"
// // 								label="Multiple values"
// // 								placeholder="Favorites"
// // 								margin="normal"
// // 								fullWidth
// // 								//	onInputChange={(e) => console.log("hi...", e.target)}
// // 								//onSelect={(e) => console.log(e.target)}
// // 								//onChange={(e) => console.log(e.target)}
// // 								//onClick={(e) => console.log("clicked...")}
// // 							/>
// // 						)}
// // 					/>
// // 				</div>
// // 				{this.state.show && <h1 style={{ color: "red" }}>ShowThis</h1>}
// // 			</div>
// // 		);
// // 	}
// // }

// // let top100Films = [
// // 	{ title: "The Shawshank Redemption", year: 1994 },
// // 	{ title: "The Godfather", year: 1972 },
// // 	{ title: "The Godfather: Part II", year: 1974 },
// // 	{ title: "The Dark Knight", year: 2008 },
// // 	{ title: "12 Angry Men", year: 1957 },
// // 	{ title: "Schindler's List", year: 1993 },
// // 	{ title: "Pulp Fiction", year: 1994 },
// // 	{ title: "The Lord of the Rings: The Return of the King", year: 2003 },
// // 	{ title: "The Good, the Bad and the Ugly", year: 1966 },
// // 	{ title: "Fight Club", year: 1999 },
// // 	{ title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
// // 	{ title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
// // 	{ title: "Forrest Gump", year: 1994 },
// // 	{ title: "Inception", year: 2010 },
// // ];

// import React, { useState, Component } from "react";
// import { Input, Chip, Button } from "@material-ui/core";

// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";

// const User = ({ onClick, visible }) => {
// 	return (
// 		<div>
// 			{visible ? (
// 				<p>
// 					User <Button onClick={onClick}>click</Button>
// 				</p>
// 			) : null}
// 		</div>
// 	);
// };

// class CustomFilter extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			users: [],
// 			showUser: true,
// 		};
// 	}
// 	handleUserClick = (e, v) => {
// 		alert("add chips");
// 		this.setState({ showUser: false });
// 		this.setState({
// 			users: [
// 				...this.state.users,
// 				<Chip label="add usr" onDelete={this.handleDelete} />,
// 			],
// 		});
// 		this.setState({ showUser: false });
// 	};
// 	selectChange = (e, v) => {
// 		let selected = true;

// 		if (selected && v !== null) {
// 			console.log("...target", v.title);

// 			this.setState({ showUser: true });

// 			if (v.title === "User" && this.state.showUser) {
// 				// this.setState({
// 				// 	users: [
// 				// 		...this.state.users,
// 				// 		<Chip label="user selected" onDelete={this.handleDelete} />,
// 				// 	],
// 				// });
// 				this.setState({
// 					users: [
// 						...this.state.users,
// 						<User
// 							onClick={this.handleUserClick}
// 							visible={this.state.showUser}
// 						/>,
// 					],
// 				});
// 			} else {
// 				this.setState({
// 					users: [
// 						...this.state.users,
// 						<Chip label={v.title} onDelete={this.handleDelete} />,
// 					],
// 				});
// 			}
// 		} else {
// 			this.setState({
// 				users: [],
// 			});
// 		}
// 	};
// 	handleDelete = (e) => {
// 		alert("delete ?");
// 	};
// 	render() {
// 		return (
// 			<div>
// 				{/* <Input
// 					type="text"
// 					name="text"
// 					placeholder="select this ..."
// 					onChange={this.selectChange}
// 				/> */}
// 				{this.state.users}
// 				<Autocomplete
// 					id="combo-box-demo"
// 					options={top100Films}
// 					getOptionLabel={(option) => option.title}
// 					style={{ width: 300 }}
// 					onChange={this.selectChange}
// 					filterSelectedOptions
// 					clearOnBlur
// 					renderInput={(params) => (
// 						<TextField {...params} label="Combo box" variant="outlined" />
// 					)}
// 				/>
// 			</div>
// 		);
// 	}
// }

// const top100Films = [{ title: "User" }, { title: "Tags" }, { title: "Type" }];

// export default CustomFilter;

import React, { Component } from "react";
import Select from "./select";
//import UserName from "./usernameDialog";
import { Dialog, Chip } from "@material-ui/core";

class MyFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			tags: "",
			type: "",
			analysisDate: "",
			analysisTime: "",
			chipsData: [],
		};
	}
	handleSelect = (e1, e2) => {
		console.log("data,name", e1, e2);
		// this.setState({
		// 	chipsData: [...this.state.chipsData, { key: e1, value: e2 }],
		// });
		// this.setState({
		// 	chipsData: [{ key: e1, value: e2 }],
		// });

		if (e1 === "user" && e2 !== "") {
			this.setState({ name: e2 });
		}
		if (e1 === "tags" && e2.length !== 0) {
			this.setState({ tags: e2 });
		}
		if (e1 === "type" && e2 !== "") {
			this.setState({ type: e2 });
		}
		if (e1 === "analysis date" && e2 !== "") {
			this.setState({ analysisDate: e2 });
		}
		if (e1 === "analysis time" && e2 !== "") {
			this.setState({ analysisTime: e2 });
		}
	};

	render() {
		const filterData = [
			{ fdata: "user" },
			{ fdata: "tags" },
			{ fdata: "type" },
			{ fdata: "analysis date" },
			{ fdata: "analysis time" },
		];
		return (
			<div>
				{/* {this.state.chipsData && this.state.chipsData.length > 0 && (
					<Chip label={chipsName}></Chip>
				)} */}

				{/* {this.state.chipsData &&
					this.state.chipsData.length > 0 &&
					this.state.chipsData.map((z) => (
						<Chip label={`${z.key}-${z.value}`}></Chip>
					))} */}
				{this.state.name && this.state.name !== "" && (
					<Chip
						label={`user name - ${this.state.name}`}
						onDelete={() => this.setState({ name: "" })}
					></Chip>
				)}
				{this.state.tags && this.state.tags !== "" && (
					// this.state.tags.map((z) => <Chip label={`tags - ${z}`}></Chip>)
					<Chip
						label={`tags - ${this.state.tags}`}
						onDelete={() => this.setState({ tags: "" })}
					></Chip>
				)}
				{this.state.type && this.state.type !== "" && (
					// this.state.tags.map((z) => <Chip label={`tags - ${z}`}></Chip>)
					<Chip
						label={`type - ${this.state.type}`}
						onDelete={() => this.setState({ type: "" })}
					></Chip>
				)}
				{this.state.analysisDate && this.state.analysisDate !== "" && (
					// this.state.tags.map((z) => <Chip label={`tags - ${z}`}></Chip>)
					<Chip
						label={`analysis date - ${this.state.analysisDate}`}
						onDelete={() => this.setState({ analysisDate: "" })}
					></Chip>
				)}
				{this.state.analysisTime && this.state.analysisTime !== "" && (
					// this.state.tags.map((z) => <Chip label={`tags - ${z}`}></Chip>)
					<Chip
						label={`analysis time - ${this.state.analysisTime}`}
						onDelete={() => this.setState({ analysisTime: "" })}
					></Chip>
				)}

				<Select handleSelect={this.handleSelect} filterData={filterData} />
			</div>
		);
	}
}

export default MyFilter;
