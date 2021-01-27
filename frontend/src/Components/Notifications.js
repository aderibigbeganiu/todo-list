import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function Notifications(props) {
	const [show, setShow] = useState(true);

	setTimeout(() => {
		setShow(false);
	}, 5000);

	return (
		<Alert
			variant={props.variant}
			show={show}
			onClose={() => setShow(false)}
			dismissible
		>
			{props.message}
		</Alert>
	);
}

export default Notifications;
