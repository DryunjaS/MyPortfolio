import React from "react"
import MediaCard from "../../../components/Card/LeftCard"
import style from "./main.module.scss"
import gsap from "gsap"

const SecondProject = () => {
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
						<img src='/images/project-201.png' alt='' className='img-project' />
					</div>
					<div class={style.card}>
						<img src='/images/project-202.png' alt='' className='img-project' />
					</div>
					<div class={style.card}>
						<img src='/images/project-203.png' alt='' className='img-project' />
					</div>
					<div class={style.card}>
						<img src='/images/project-204.png' alt='' className='img-project' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SecondProject
