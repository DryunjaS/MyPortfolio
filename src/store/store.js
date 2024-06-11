import { observable } from "mobx"

const store = observable({
	cards: [
		{
			img: "frontend.jpg",
			title: "Frontend",
			text: "Frontend — это часть веб-сайта или приложения, с которой взаимодействует пользователь. Это все, что вы видите и с чем работаете: текст, изображения, кнопки, формы и так далее.",
		},
		{
			img: "my-foto-card.jpg",
			title: "О себе",
			text: "Мне 21 год, я студент и fullstack разработчик, знимаюсь разработкой дескторных и веб приложений.",
		},
		{
			img: "backend.jpg",
			title: "Backend",
			text: "Backend — это часть веб-сайта или приложения, которая работает на сервере и не видна пользователю. Он отвечает за логику, работу с базами данных, обработку запросов и хранение данных. ",
		},
		{
			img: "front-back.webp",
			title: "Fullstack",
			text: "Fullstack разработчик — это человек, который имеет навыки как во frontend, так и в backend разработке. Такой разработчик может создавать полноценные веб-приложения с нуля, управлять базами данных, обрабатывать запросы пользователя и создавать удобный и функциональный интерфейс. ",
		},
	],
	treeData: {
		name: "Fullstack JS Developer",
		children: [
			{
				name: "Frontend",
				children: [
					{ name: "HTML" },
					{ name: "CSS" },
					{ name: "JavaScript" },
					{ name: "React" },
					{ name: "Redux" },
					{ name: "Responsive Design" },
				],
			},
			{
				name: "Backend",
				children: [
					{ name: "Node.js" },
					{ name: "Express" },
					{ name: "RESTful APIs" },
					{ name: "Authentication" },
					{
						name: "Databases",
						children: [{ name: "MongoDB" }, { name: "SQL" }],
					},
				],
			},
			{
				name: "Tools & Others",
				children: [
					{ name: "Git" },
					{ name: "npm / Yarn" },
					{ name: "Webpack" },
					{
						name: "Testing",
						children: [
							{ name: "Unit Testing" },
							{ name: "Integration Testing" },
							{ name: "End-to-End Testing" },
						],
					},
					{ name: "CI/CD" },
					{ name: "Docker" },
					{ name: "Microservices" },
				],
			},
			{
				name: "Additional Skills",
				children: [
					{ name: "TypeScript" },
					{ name: "GraphQL" },
					{ name: "Serverless" },
					{ name: "Security" },
					{ name: "Performance Optimization" },
				],
			},
		],
	},
})

export default store
