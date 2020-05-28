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
				{this.state.name && this.state.name !== "" && (
					<Chip
						label={`user name - ${this.state.name}`}
						onDelete={() => this.setState({ name: "" })}
					></Chip>
				)}
				{this.state.tags && this.state.tags !== "" && (
					<Chip
						label={`tags - ${this.state.tags}`}
						onDelete={() => this.setState({ tags: "" })}
					></Chip>
				)}
				{this.state.type && this.state.type !== "" && (
					<Chip
						label={`type - ${this.state.type}`}
						onDelete={() => this.setState({ type: "" })}
					></Chip>
				)}
				{this.state.analysisDate && this.state.analysisDate !== "" && (
					<Chip
						label={`analysis date - ${this.state.analysisDate}`}
						onDelete={() => this.setState({ analysisDate: "" })}
					></Chip>
				)}
				{this.state.analysisTime && this.state.analysisTime !== "" && (
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
