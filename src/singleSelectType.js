import React from "react";
import { Button } from "@material-ui/core";

const MyType = ({ close, save, handleSelect }) => {
	return (
		<div>
			<h3>type Component ....</h3>
			<Button onClick={() => (save(), handleSelect("type", "device"))}>
				save
			</Button>
			<Button onClick={close}>close</Button>
		</div>
	);
};

export default MyType;
