import React from "react"
import MediaCard from "../../components/Card/LeftCard"
import style from "./main.module.scss"
import gsap from "gsap"

const SecondProject = () => {
	gsap.fromTo(
		".img-project-2",
		{ opacity: 0, x: -200 },
		{
			x: 0,
			opacity: 1,
			stagger: 0.15,
			scrollTrigger: {
				trigger: ".img-project-2",
				start: "center center",
				end: "center center",
				scrub: false,
			},
		}
	)
	return (
		<div className={style.wrapper}>
			<div className={style.content}>
				<div className={style.left}>
					<MediaCard
						title='Платформа для тестирования'
						text='Разработан с использованием React, WebSocket, JWT, PostgreSQl, Node js. Позволяет созвать пользователей, тесты и вопросы, а преподавателю просматривать ответы учеников в реальном времени.'
						img='/images/project-202.png'
						web='http://193.187.172.3:5000'
						git='https://github.com/DryunjaS/AST_test'
					/>
				</div>
				<div className={style.right}>
					<div class={style.card}>
						<img
							src='/images/project-201.png'
							alt=''
							className='img-project-2'
						/>
					</div>
					<div class={style.card}>
						<img
							src='/images/project-202.png'
							alt=''
							className='img-project-2'
						/>
					</div>
					<div class={style.card}>
						<img
							src='/images/project-203.png'
							alt=''
							className='img-project-2'
						/>
					</div>
					<div class={style.card}>
						<img
							src='/images/project-204.png'
							alt=''
							className='img-project-2'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SecondProject
