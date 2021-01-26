import React from "react";
import { Card, Media, Button } from "react-bootstrap";

function TodoCard(props) {
	const { id, title, deleteTodo } = props;
	return (
		<Media.Body>
			<Card.Body>
				<input
					type="checkbox"
					className="form-check-input position-static mr-2"
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
