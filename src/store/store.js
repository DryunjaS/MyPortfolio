import { observable } from "mobx"

const store = observable({
	cards: [
		{
			img: "backend.jpg",
			title: "backend",
			text: "Это, та часть работ, которая происходит  на сервере.",
		},
		{
			img: "backend-2.jpg",
			title: "Сервер",
			text: "Сервер — это специальный мощьный компьютер",
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
})

export default store
