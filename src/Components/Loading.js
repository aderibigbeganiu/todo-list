import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
	return (
		<Spinner animation="border" variant="primary" size="lg" role="status">
			<span className="sr-only">Loading...</span>
		</Spinner>
	);
}

export default Loading;
