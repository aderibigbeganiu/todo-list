import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import Layout from "./Containers/Layout";
import NavBar from "./Containers/NavBar";
import { connect } from "react-redux";
import * as authActions from "./store/actions/authActions";
import * as userActions from "./store/actions/userActions";

function App(props) {
	useEffect(() => {
		props.onTryAutoSignup();
	}, [props]);
	return (
		<Router>
			<Layout>
				<NavBar {...props} />
				<BaseRouter />
			</Layout>
		</Router>
	);
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.token !== null,
		token: state.token,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTryAutoSignup: () => dispatch(authActions.authCheckState()),
		getUser: dispatch(userActions.getUser(localStorage.getItem("token"))),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
