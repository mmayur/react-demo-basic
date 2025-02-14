import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		maxWidth: 300,
	},
	chips: {
		display: "flex",
		flexWrap: "wrap",
	},
	chip: {
		margin: 2,
	},
	noLabel: {
		marginTop: theme.spacing(3),
	},
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const names = ["tag 1", "tag 2", "tag 3"];

export default function MultipleSelect({ close, save, handleSelect }) {
	const classes = useStyles();
	// const theme = useTheme();
	const [personName, setPersonName] = React.useState([]);

	const handleChange = (event) => {
		setPersonName(event.target.value);
	};

	// const handleChangeMultiple = (event) => {
	// 	const { options } = event.target;
	// 	const value = [];
	// 	for (let i = 0, l = options.length; i < l; i += 1) {
	// 		if (options[i].selected) {
	// 			value.push(options[i].value);
	// 		}
	// 	}
	// 	setPersonName(value);
	// };

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
				<Select
					labelId="demo-mutiple-checkbox-label"
					id="demo-mutiple-checkbox"
					multiple
					value={personName}
					onChange={handleChange}
					input={<Input />}
					renderValue={(selected) => selected.join(", ")}
					MenuProps={MenuProps}
				>
					{names.map((name) => (
						<MenuItem key={name} value={name}>
							<Checkbox checked={personName.indexOf(name) > -1} />
							<ListItemText primary={name} />
						</MenuItem>
					))}
				</Select>
				<Button onClick={() => (save(), handleSelect("tags", personName))}>
					save
				</Button>
				<Button onClick={close}>close</Button>
			</FormControl>
		</div>
	);
}
