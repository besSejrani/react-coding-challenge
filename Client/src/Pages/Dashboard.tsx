import React, { useEffect } from "react";

import axios from "axios";

// ========================================================================================================

const Dashboard = () => {
	const getData = async () => {
		const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/api/v1/plannings`);
		console.log(data);
	};

	useEffect(() => {
		getData();
	}, []);

	return <div>Hello world</div>;
};

export default Dashboard;
