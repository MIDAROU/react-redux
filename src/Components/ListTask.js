import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	checkTask,
	removeTask,
	setEdit,
	toggleEdit,
} from "../JS/Actions/Actions";

function ListTask() {
	const tasks = useSelector((state) => state.tasks);
	const [value, setValue] = useState("");
	const [list, setList] = useState("ALL");
	const dispatch = useDispatch();
	const handleEdit = (editing) => {
		if (editing) {
			return true;
		}
		return false;
	};
	return (
		<>
			<div className="ListHeader">
				<h2 onClick={() => setList("ALL")}>All</h2>
				<h2 onClick={() => setList("COMPLETE")}>Completed</h2>
				<h2 onClick={() => setList("NOTCOMPLETE")}>Not Completed</h2>
			</div>
			<main id="ListTask">
				{!tasks || !tasks.length ? (
					<p style={{ textAlign: "center" }}>No Tasks</p>
				) : (
					tasks
						.filter((task) => {
							if (list === "ALL") {
								return task;
							} else if (list === "COMPLETE" && task.isDone) {
								return task;
							} else if (list === "NOTCOMPLETE" && !task.isDone) {
								return task;
							}
							return false;
						})
						.map((task) => (
							<div className="Task" key={task.id}>
								<div className="Edit">
									<p
										className={`EditText ${task.isDone ? "Checked" : ""} ${
											handleEdit(task.editing) ? "TextUp" : null
										}`}
										onClick={() => dispatch(checkTask(task.id))}
									>
										{task.description}
									</p>
									<div
										className={`EditInput ${
											handleEdit(task.editing) ? "active" : null
										}`}
									>
										<input
											type="text"
											defaultValue={task.description}
											onChange={(e) => setValue(e.target.value)}
											onKeyPress={(e) =>
												e.key === "Enter"
													? e.target.value !== ""
														? dispatch(setEdit(value, task.id)) &&
														  dispatch(toggleEdit(task.editing, task.id))
														: alert("Task Is Empty!")
													: null
											}
										/>
									</div>
								</div>
								<div className="TaskIcons">
									<FontAwesomeIcon
										onClick={() => dispatch(toggleEdit(task.editing, task.id))}
										className={`EditIcon ${
											handleEdit(task.editing) ? "EditIconActive" : null
										}`}
										icon={faEdit}
									/>
									<FontAwesomeIcon
										onClick={() => dispatch(removeTask(task.id))}
										className="RemoveIcon"
										icon={faTrashAlt}
									/>
								</div>
							</div>
						))
				)}
			</main>
		</>
	);
}

export default ListTask;
