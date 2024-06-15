import React, { useEffect, useState, useCallback } from "react"
import ForceGraph2D from "react-force-graph-2d"

const parseArpTable = (arpTable) => {
	const root = {
		ip: "Network", // Центральный узел сети
		mac: "network-mac",
		imgUrl: "./images/Сеть.png", // Изображение для центрального узла
		children: [], // Дочерние узлы
	}

	// Первая подсеть: ПК, Ноутбук, Коммутатор, Маршрутизатор
	const subnet1 = {
		ip: "192.168.1.x",
		mac: "subnet1-router-mac",
		imgUrl: "./images/Маршрутизатор.png", // Изображение для маршрутизатора
		children: [
			{
				ip: "192.168.1.x", // IP коммутатора
				mac: "subnet1-switch-mac", // MAC адрес коммутатора
				imgUrl: "./images/Коммутатор.png", // Изображение для коммутатора
				children: [
					{
						ip: "192.168.1.1",
						mac: "PC-mac-1",
						imgUrl: "./images/ПК.png",
					}, // Первый сервер
					{
						ip: "192.168.1.2",
						mac: "Laptop-mac-2",
						imgUrl: "./images/Ноутбук.png",
					}, // Второй сервер
				],
			},
		],
	}
	root.children.push(subnet1)

	// Вторая подсеть: Сервера
	const subnet2 = {
		ip: "192.168.2.x",
		mac: "subnet2-router-mac",
		imgUrl: "./images/Маршрутизатор.png", // Изображение для маршрутизатора
		children: [
			{
				ip: "192.168.2.x", // IP коммутатора
				mac: "subnet2-switch-mac", // MAC адрес коммутатора
				imgUrl: "./images/Коммутатор.png", // Изображение для коммутатора
				children: [
					{
						ip: "192.168.2.1",
						mac: "server-mac-1",
						imgUrl: "./images/Сервер.png",
					}, // Первый сервер
					{
						ip: "192.168.2.2",
						mac: "server-mac-2",
						imgUrl: "./images/Сервер.png",
					}, // Второй сервер
				],
			},
		],
	}

	root.children.push(subnet2)

	const subnet3 = {
		ip: "192.168.3.x",
		mac: "subnet3-router-mac",
		imgUrl: "./images/Маршрутизатор.png", // Изображение для маршрутизатора
		children: [
			{
				ip: "192.168.3.x", // IP коммутатора
				mac: "subnet3-switch-mac", // MAC адрес коммутатора
				imgUrl: "./images/Коммутатор.png", // Изображение для коммутатора
				children: [
					{
						ip: "192.168.3.1",
						mac: "PC-mac-1",
						imgUrl: "./images/ПК.png",
					}, // Первый сервер
					{
						ip: "192.168.3.2",
						mac: "Laptop-mac-2",
						imgUrl: "./images/Ноутбук.png",
					}, // Второй сервер
				],
			},
		],
	}
	root.children.push(subnet3)

	return [root]
}

const createGraphData = (graphDataNew) => {
	let nodes = []
	let links = []

	const addNodeAndLinks = (entry, parentId = null, depth = 0) => {
		const nodeId = nodes.length

		nodes.push({
			id: nodeId,
			ip: entry.ip,
			mac: entry.mac,
			imgUrl: entry.imgUrl,
			depth: depth,
		})

		if (parentId !== null) {
			links.push({
				source: parentId,
				target: nodeId,
			})
		}

		if (entry.children) {
			entry.children.forEach((child) =>
				addNodeAndLinks(child, nodeId, depth + 1)
			)
		}
	}

	graphDataNew.forEach((entry) => addNodeAndLinks(entry))

	return { nodes, links }
}

const NetworkGraph = () => {
	const [graphData, setGraphData] = useState({ nodes: [], links: [] })
	const [graphDataNew, setGraphDataNew] = useState([])
	const [nameNodes, setNameNodes] = useState([])

	const [arpTable, setArpTable] = useState([
		{ ip: "192.168.64.255", mac: "ff-ff-ff-ff-ff-ff", type: "static" },
		{ ip: "224.0.0.22", mac: "01-00-5e-00-00-16", type: "static" },
		{ ip: "224.0.0.251", mac: "01-00-5e-00-00-fb", type: "static" },
		{ ip: "224.0.0.252", mac: "01-00-5e-00-00-fc", type: "static" },
		{ ip: "239.192.152.143", mac: "01-00-5e-40-98-8f", type: "static" },
		{ ip: "239.255.255.250", mac: "01-00-5e-7f-ff-fa", type: "static" },
		{ ip: "239.255.255.252", mac: "ff-ff-ff-ff-ff-ff", type: "static" },
	])

	const [show, setShow] = useState(false)
	const [showDelete, setShowDelete] = useState(false)
	const [showOffcan, setShowOffcan] = useState(false)

	const [currentNode, setCurrentNode] = useState(null)
	const [fullscreen, setFullScreen] = useState(false)

	useEffect(() => {
		if (arpTable.length > 0) {
			const hierarchicalData = parseArpTable(arpTable)
			setGraphDataNew(hierarchicalData)
		}
	}, [arpTable])

	//---Получение массива имен------
	const traverseTree = (node, nodesMap, nameCount) => {
		if (node.imgUrl) {
			const fileName = node.imgUrl.split("/").pop().split(".")[0]
			const capitalizedFileName =
				fileName.length === 2
					? fileName.toUpperCase()
					: fileName.charAt(0).toUpperCase() + fileName.slice(1)

			if (node.ip) {
				const uniqueName = `${capitalizedFileName}`

				nodesMap[node.ip] = { ip: node.ip, name: uniqueName }
			}
		}

		if (node.children && Array.isArray(node.children)) {
			node.children.forEach((childNode) =>
				traverseTree(childNode, nodesMap, nameCount)
			)
		}
	}

	useEffect(() => {
		if (graphDataNew.length > 0) {
			const data = createGraphData(graphDataNew)
			setGraphData(data)
		}

		const nodesMap = {}
		const nameCount = {}
		graphDataNew.forEach((node) => traverseTree(node, nodesMap, nameCount))
		setNameNodes(Object.values(nodesMap))
	}, [graphDataNew])

	const loadImage = useCallback((src) => {
		return new Promise((resolve, reject) => {
			const img = new Image()
			img.src = src
			img.onload = () => resolve(img)
			img.onerror = (err) => reject(err)
		})
	}, [])

	const renderNode = useCallback(
		async (node, ctx, globalScale) => {
			if (!node.img || node.imgUrl !== node.loadedImgUrl) {
				try {
					node.img = await loadImage(node.imgUrl)
					node.loadedImgUrl = node.imgUrl
				} catch (err) {
					console.error(`Failed to load image: ${node.imgUrl}`, err)
					return
				}
			}
			const size = 48 / globalScale
			ctx.drawImage(node.img, node.x - size / 2, node.y - size / 2, size, size)
		},
		[loadImage]
	)

	const handleNodeClick = (node) => {
		setCurrentNode(node)
		setShow(true)
	}

	const handleNodeRightClick = (node) => {
		setCurrentNode(node)
		setShowDelete(true)
	}

	const updateNodeImage = (newImageUrl) => {
		const updatedGraphData = updateNodeImageRecursively(
			graphDataNew,
			currentNode.ip,
			newImageUrl
		)
		setGraphDataNew(updatedGraphData)
	}

	const updateNodeImageRecursively = (data, nodeIp, newImageUrl) => {
		return data.map((entry) => {
			if (entry.ip === nodeIp) {
				return {
					...entry,
					imgUrl: newImageUrl,
				}
			} else if (entry.children && entry.children.length > 0) {
				return {
					...entry,
					children: updateNodeImageRecursively(
						entry.children,
						nodeIp,
						newImageUrl
					),
				}
			}
			return entry
		})
	}
	const updateNodeNameByIp = (ip, newName) => {
		setNameNodes((prevNameNodes) => {
			const updatedNameNodes = [...prevNameNodes]

			const nodeIndex = updatedNameNodes.findIndex((node) => node.ip === ip)

			if (nodeIndex !== -1) {
				updatedNameNodes[nodeIndex] = {
					...updatedNameNodes[nodeIndex],
					name: newName,
				}
			}

			return updatedNameNodes
		})
	}

	const handleDeleteNode = (node) => {
		const updatedGraphData = deleteNodeAndReassignChildren(
			graphDataNew,
			node.ip
		)
		setGraphDataNew(updatedGraphData)
	}

	const deleteNodeAndReassignChildren = (data, nodeIp) => {
		const traverse = (entries, parent = null) => {
			return entries
				.map((entry) => {
					if (entry.ip === nodeIp) {
						if (parent) {
							parent.children = parent.children.concat(entry.children || [])
						}
						return null
					}
					if (entry.children) {
						entry.children = traverse(entry.children, entry)
					}
					return entry
				})
				.filter((entry) => entry !== null)
		}
		return traverse(data)
	}

	const handleImageChange = (newImageUrl) => {
		updateNodeImage(newImageUrl)
	}

	// Создаем объект для быстрого поиска названий узлов по IP
	const nameNodesMap = Object.fromEntries(
		nameNodes.map((node) => [node.ip, node.name])
	)

	return (
		<>
			<ForceGraph2D
				graphData={graphData}
				onNodeClick={handleNodeClick}
				onNodeRightClick={handleNodeRightClick}
				nodeCanvasObject={(node, ctx, globalScale) => {
					renderNode(node, ctx, globalScale)
					const nodeName = nameNodesMap[node.ip] || ""
					const fontSize = 12 / globalScale
					ctx.font = `${fontSize}px Arial`
					ctx.textAlign = "center"
					ctx.textBaseline = "middle"
					ctx.fillStyle = "#fff"
					ctx.fillText(nodeName, node.x, node.y + 13)
				}}
				linkDirectionalParticles={1}
				nodeLabel={(node) => `IP: ${node.ip}\nMAC: ${node.mac}`}
			/>
		</>
	)
}

export default NetworkGraph
