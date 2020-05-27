import React from "react";
import { Button } from "@material-ui/core";

const MyClock = ({ close, save, handleSelect }) => {
	return (
		<div>
			<h3>Clock Component ....</h3>
			<Button
				onClick={() => (
					save(), handleSelect("analysis time", "11:15 PM - 03:15 PM")
				)}
			>
				save
			</Button>
			<Button onClick={close}>close</Button>
		</div>
	);
};

export default MyClock;
