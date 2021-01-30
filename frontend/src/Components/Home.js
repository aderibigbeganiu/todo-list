import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import * as actions from "../store/actions/todoActions";
import { connect } from "react-redux";
import HomeStyle from "./HomeStyle.module.scss";
import TodoCard from "./TodoCard";
import Loading from "./Loading";
import TodoCreateForm from "./TodoCreateForm";

const Home = (props) => {
	const [createFormShow, setCreateFormShow] = useState(false);

	const handleCreateFormClose = () => setCreateFormShow(false);
	const handleCreateFormShow = () => setCreateFormShow(true);

	const {
		todos,
		fetchTodos,
		deleteTodo,
		isLoading,
		user,
		todoCompleted,
		isAuthenticated,
	} = props;

	useEffect(() => {
		fetchTodos();
	}, [fetchTodos]);

	return (
		<Container className="justify-content-center">
			<Row>
				<Col>
					<h1 className="text-center mt-3">
						{isAuthenticated ? (
							<Button variant="primary" onClick={handleCreateFormShow}>
								CREATE TODO
							</Button>
						) : (
							"Login to create todo"
						)}
						<TodoCreateForm
							createFormShow={createFormShow}
							handleCreateFormClose={handleCreateFormClose}
						/>
					</h1>
					<div className={HomeStyle.center}>
						{isLoading ? (
							<Loading />
						) : (
							<ul className="list-unstyled">
								{todos
									.filter((todo) => todo.user === user.pk)
									.map((todo) => (
										<TodoCard
											className={HomeStyle.card}
											key={todo.id}
											title={todo.title}
											deleteTodo={deleteTodo}
											todoCompleted={todoCompleted}
											id={todo.id}
										/>
									))}
							</ul>
						)}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.token !== null,
		todos: state.todos,
		isLoading: state.isLoading,
		error: state.error,
		user: state.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTodos: () => dispatch(actions.fetchTodos()),
		deleteTodo: (id) => dispatch(actions.deleteTodo(id)),
		todoCompleted: (id, completed) =>
			dispatch(actions.todoCompleted(id, completed)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
