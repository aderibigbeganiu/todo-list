import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import Layout from "./Containers/Layout";
import Navbar from "./Containers/Navbar";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";

function App(props) {
	useEffect((props) => {
		props.onTryAutoSignup();
	}, []);
	return (
		<Router>
			<Layout>
				<Navbar {...props} />
				<BaseRouter />
			</Layout>
		</Router>
	);
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.token !== null,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTryAutoSignup: () => dispatch(actions.authCheckState()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
