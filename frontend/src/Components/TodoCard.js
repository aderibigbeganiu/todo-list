import React, { useState } from "react";
import { Card, Media, Button } from "react-bootstrap";

function TodoCard(props) {
	const [completed, setCompleted] = useState(true);

	const { id, title, deleteTodo, todoCompleted } = props;

	const handleCompleted = () => {
		setCompleted(!completed);
		todoCompleted(id, completed);
	};
	return (
		<Media.Body>
			<Card.Body>
				<input
					name="completed"
					type="checkbox"
					checked={completed}
					onChange={() => setCompleted(!completed)}
					className="form-check-input position-static mr-2"
					onClick={handleCompleted}
				/>
				{title}
				<Button
					onClick={() => deleteTodo(id)}
					size="sm"
					variant="danger"
					className="ml-2"
				>
					Delete
				</Button>
			</Card.Body>
		</Media.Body>
	);
}

export default TodoCard;
