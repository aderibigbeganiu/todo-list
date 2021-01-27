import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import * as todoActions from "../store/actions/todoActions";
import Categories from "./Categories";
import Priorities from "./Priorities";

function TodoCreateForm(props) {
	const [data, setData] = useState({
		title: "",
		due_date: "",
		notes: "",
		priority_id: null,
		category_id: null,
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleCreateTodo = (e) => {
		e.preventDefault();
		props.createTodo(
			props.user.pk,
			data.title,
			data.due_date,
			data.notes,
			data.category_id,
			data.priority_id
		);
	};

	return (
		<Modal show={props.createFormShow} onHide={props.handleCreateFormClose}>
			<Form onSubmit={handleCreateTodo}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<Form.Group>
						<Form.Label>Title</Form.Label>
						<Form.Control
							name="title"
							value={data.title}
							onChange={handleChange}
							type="text"
							placeholder="Enter title"
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Due Date</Form.Label>
						<Form.Control
							name="due_date"
							value={data.due_date}
							onChange={handleChange}
							type="datetime-local"
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Note</Form.Label>
						<Form.Control
							name="notes"
							value={data.notes}
							onChange={handleChange}
							as="textarea"
							rows={3}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Category</Form.Label>
						<Form.Control
							name="category_id"
							onChange={handleChange}
							as="select"
							defaultValue="Choose Category..."
							required
						>
							<Categories />
						</Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Priority</Form.Label>
						<Form.Control
							name="priority_id"
							onChange={handleChange}
							as="select"
							defaultValue="Choose Priority..."
							required
						>
							<Priorities />
						</Form.Control>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={props.handleCreateFormClose}>
						Close
					</Button>
					<Button type="submit">Submit form</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		createTodo: (user, title, due_date, notes, priority_id, category_id) => {
			dispatch(
				todoActions.createTodo(
					user,
					title,
					due_date,
					notes,
					priority_id,
					category_id
				)
			);
		},
	};
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoCreateForm);
