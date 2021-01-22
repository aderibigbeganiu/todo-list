import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeStyle from "./HomeStyle.module.scss";

function Home() {
	return (
		<Container className="justify-content-center">
			<Row>
				<Col>
					<div className={HomeStyle.center}>
						Hello{" "}
						{localStorage.getItem("username")
							? localStorage.getItem("username")
							: "Guest"}
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
