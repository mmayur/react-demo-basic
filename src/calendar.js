import React from "react";
import { Button } from "@material-ui/core";

const MyCalendar = ({ close, save, handleSelect }) => {
	return (
		<div>
			<h3>Calendar Component ....</h3>
			<Button
				onClick={() => (
					save(), handleSelect("analysis date", "27-05-2020  : 28-05-2020")
				)}
			>
				save
			</Button>
			<Button onClick={close}>close</Button>
		</div>
	);
};

export default MyCalendar;
