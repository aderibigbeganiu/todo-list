import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";

const BaseRouter = () => {
	<Switch>
		<Route exact path="/" component={Home} />
	</Switch>;
};

export default BaseRouter;
