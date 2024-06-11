import React from "react"
import Tree from "react-d3-tree"

const horizontalTreeStyles = {
	links: {
		stroke: "#2779a7",
		strokeWidth: 2,
	},
	nodes: {
		node: {
			circle: {
				fill: "#fff",
				stroke: "#2779a7",
				strokeWidth: 2,
			},
			name: {
				fontSize: "14px",
				fill: "#000",
			},
		},
		leafNode: {
			circle: {
				fill: "#fff",
				stroke: "#2779a7",
				strokeWidth: 2,
			},
			name: {
				fontSize: "14px",
				fill: "#000",
			},
		},
	},
}

const HorizontalTree = ({ data }) => {
	return (
		<div style={{ width: "100%", height: "100vh" }}>
			<Tree
				data={data}
				translate={{ x: 650, y: 250 }}
				orientation='vertical'
				styles={horizontalTreeStyles}
			/>
		</div>
	)
}

export default HorizontalTree
