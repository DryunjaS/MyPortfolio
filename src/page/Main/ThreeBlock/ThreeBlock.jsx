import React, { useState, useEffect } from "react"
import style from "./main.module.scss"
import NetworkGraph from "../../../components/Graph/TreeComponent"
import Typewriter from "../../../components/Typewriter/Typewriter"
import gsap from "gsap"

const ThreeBlock = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [lineLength, setLineLength] = useState(0)

	const imagePaths = [
		{
			img: "/images/backend-10.jpg",
			text: "Эта идея взаимодействия клиента и сервера по сети называется моделью «клиент-сервер». Это делает возможным просмотр веб-сайтов (например, сайт wiki.merionet.ru) и взаимодействие с веб-приложением (как Gmail).",
		},
		{
			img: "/images/backend-11.jpg",
			text: "Существует сотни способов настройки веб-приложения. При этом большинство из них следуют одной и той же базовой структуре: клиент, сервер, база данных.",
		},
		{
			img: "/images/backend-12.jpg",
			text: "Когда вы вводите адрес сайта в браузере: Браузер (клиент) отправляет запрос на сервер. Сервер получает запрос, обрабатывает его и отправляет обратно нужные данные. Браузер получает данные и отображает их вам.",
		},
		{
			img: "/images/backend-13.jpg",
			text: "API (Application Programming Interface) — это набор правил и протоколов, который позволяет различным программным компонентам взаимодействовать друг с другом. В контексте клиент-серверной модели API выполняет важную роль.",
		},
		{
			img: "/images/backend-14.jpg",
			text: "База данных (БД) в бэкэнде используется для хранения, управления и извлечения данных.Базы данных являются ключевым компонентом большинства современных веб-приложений и систем, обеспечивая надежное хранение и управление данными.",
		},
		{
			img: "/images/backend-15.jpg",
			text: "Node.js — это серверная платформа для выполнения JavaScript-кода вне браузера. Node.js является мощным инструментом для современных веб-разработчиков, позволяя создавать быстрые и масштабируемые серверные приложения.",
		},
	]

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length)

			gsap.set("#lineFill", { width: "0%" })

			gsap.to("#lineFill", {
				duration: 10,
				width: "100%",
				ease: "none",
			})
		}, 10000)

		return () => {
			clearInterval(intervalId)
		}
	}, [currentIndex])

	gsap.fromTo(
		".imgBackend",
		{ opacity: 0, y: 100, borderRadius: 0 },
		{
			y: 0,
			opacity: 1,
			stagger: 0.15,
			borderRadius: 16,
			scrollTrigger: {
				trigger: ".imgBackend",
				start: "center",
				end: "center",
				scrub: false,
			},
		}
	)

	gsap.fromTo(
		".gsapRight",
		{ opacity: 0, x: 200 },
		{
			x: 0,
			opacity: 1,
			stagger: 0.3,
			scrollTrigger: {
				trigger: ".gsapRight",
				start: "center",
				end: "center",
				scrub: false,
			},
		}
	)

	return (
		<div className={style.wrapper}>
			<div className={style.content}>
				<div className={style.threeLeft}>
					<div className={style.threeLeftText}>
						<div className={style.slideContainer}>
							<div className={style.threeLeftSlide}>
								Этап {currentIndex + 1}
							</div>
							<div
								id='lineFill'
								className={style.lineFill}
								style={{ width: `${lineLength}%` }}
							></div>
							<div className={style.threeLeftSlide}>
								Этап {currentIndex + 2}
							</div>
						</div>
						<Typewriter
							delay={20}
							text={imagePaths[currentIndex].text}
							className={style.threeLeftText}
						/>
					</div>
					<img
						src={imagePaths[currentIndex].img}
						alt={`Image ${currentIndex + 1}`}
						className='imgBackend'
					/>
				</div>
				<div className={style.threeRight}>
					<div className='gsapRight'>
						<NetworkGraph />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThreeBlock
