import React, { useEffect, useState } from "react";
import axios from "axios";

const Categories = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const endPoint = `${process.env.REACT_APP_API_URL}`;
		axios
			.get(`${endPoint}/categories`)
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
			{data.map((category) => (
				<option key={category.id} value={category.id}>
					{category.name}
				</option>
			))}
		</>
	);
};

export default Categories;
