import React from "react"
import { Bar } from "react-chartjs-2"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const MyChart = () => {
	const data = {
		labels: ["React", "Angular", "Vue", "Others"],
		datasets: [
			{
				label: "Популярность",
				data: [225.821, 170.693, 80, 48.078, 7.205],
				backgroundColor: "rgba(75, 192, 192, 0.2)",
				borderColor: "rgba(75, 192, 192, 1)",
				borderWidth: 1,
			},
		],
	}

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
				labels: {
					color: "#dbdbdb",
					font: {
						size: 14,
					},
				},
			},
			title: {
				display: true,
				text: "Популярные фреймворки для Frontend разработки",
				color: "#dbdbdb",
				font: {
					size: 18,
				},
			},
		},
		scales: {
			x: {
				ticks: {
					color: "#dbdbdb",
				},
			},
			y: {
				ticks: {
					color: "#dbdbdb",
				},
			},
		},
	}

	return <Bar data={data} options={options} />
}

export default MyChart
