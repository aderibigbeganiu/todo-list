import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as actions from "../store/actions/todoActions";
import { connect } from "react-redux";
import HomeStyle from "./HomeStyle.module.scss";
import TodoCard from "./TodoCard";
import Loading from "./Loading";

const Home = (props) => {
	const {
		todos,
		fetchTodos,
		deleteTodo,
		isLoading,
		user,
		todoCompleted,
	} = props;

	useEffect(() => {
		fetchTodos();
	}, [fetchTodos]);

	return (
		<Container className="justify-content-center mt-5">
			<Row>
				<Col>
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
