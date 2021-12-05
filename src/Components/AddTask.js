import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/Actions/Actions";

function AddTask() {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState("");
	return (
		<header id="AddTask">
			<input
				className="AddInput"
				type="text"
				placeholder="Type a new task..."
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyPress={(e) =>
					e.key === "Enter"
						? inputValue !== ""
							? dispatch(
									addTask({
										description: inputValue,
										id: 0,
										isDone: false,
										editing: false,
									})
							  ) & setInputValue("")
							: alert("Type In Something!")
						: null
				}
			/>
		</header>
	);
}

export default AddTask;
