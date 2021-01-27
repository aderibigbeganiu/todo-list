import React, { useEffect, useState } from "react";
import axios from "axios";

const Priorities = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const endPoint = `${process.env.REACT_APP_API_URL}`;
		axios
			.get(`${endPoint}/priorities`)
			.then((res) => {
				setData(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<>
			<option value="">Choose Category...</option>
			{data.map((priority) => (
				<option key={priority.id} value={priority.id}>
					{priority.name}
				</option>
			))}
		</>
	);
};

export default Priorities;
