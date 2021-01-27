import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";

const BaseRouter = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route component={NotFound} />
	</Switch>
);

export default BaseRouter;
