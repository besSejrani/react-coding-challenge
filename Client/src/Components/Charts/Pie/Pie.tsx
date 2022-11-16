import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// ========================================================================================================

ChartJS.register(ArcElement, Tooltip, Legend);

const Pi = ({ fetchedData }) => {
	const newLabels = [];
	const newData = [];

	fetchedData.forEach((element) => {
		newLabels.push(element._id);
		newData.push(element.total);
	});

	const data = {
		labels: newLabels,
		datasets: [
			{
				label: "Total",
				data: newData,
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	return (
		<div style={{ width: 450, height: 450 }}>
			<Doughnut data={data} />
		</div>
	);
};

export default Pi;
