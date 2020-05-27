import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { Dialog } from "@material-ui/core";

import MultiSelect from "./multiselect";

const useStyles = makeStyles((theme) => ({
	button: {
		display: "block",
		marginTop: theme.spacing(2),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

export default function ControlledOpenSelect({ handleSelect }) {
	const classes = useStyles();
	const [data, setData] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const [name, setName] = React.useState("");
	const [tags, setTags] = React.useState([]);

	console.log("data from select...", data);

	const handleChange = (event) => {
		setData(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const closeThis = () => {
		setOpen(false);
		setData("");
	};

	const saveThis = () => {
		alert("add chips");
		setOpen(false);
		setData("");
	};

	const closeTags = () => {
		alert("close tags");
		setOpen(false);
		setData("");
	};

	const saveTags = () => {
		alert("add chips");
		setOpen(false);
		setData("");
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleFocus = (event, v) => {
		console.log("focu event...", event.target, v);
		event.target.value = "";
	};

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-controlled-open-select-label">Data</InputLabel>
				<Select
					labelId="demo-controlled-open-select-label"
					id="demo-controlled-open-select"
					name="select"
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={data}
					onChange={handleChange}
					onSelect={handleChange}
					onFocus={handleFocus}
					// onClick={handleSelect}
				>
					<MenuItem value="user" onClick={handleOpen}>
						User
					</MenuItem>
					<MenuItem value="tags" onClick={handleOpen}>
						Tags
					</MenuItem>
					<MenuItem value="type" onClick={handleOpen}>
						Type
					</MenuItem>
				</Select>
			</FormControl>
			{data === "tags" && (
				<Dialog
					open={open}
					// onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					tags
					<MultiSelect
						close={closeTags}
						save={saveTags}
						handleSelect={handleSelect}
					></MultiSelect>
				</Dialog>
			)}
			{data === "type" && (
				<Dialog
					open={open}
					//onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					type
				</Dialog>
			)}
			{data === "user" && (
				<Dialog
					open={open}
					// onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					user
					<input
						type="text"
						name="name"
						value={name}
						onChange={handleNameChange}
					/>
					<Button onClick={() => (saveThis(), handleSelect(data, name))}>
						save
					</Button>
					<Button onClick={closeThis}>close</Button>
				</Dialog>
			)}
		</div>
	);
}
