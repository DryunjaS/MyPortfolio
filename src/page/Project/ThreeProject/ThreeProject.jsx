import React from "react"
import MediaCard from "../../../components/Card/LeftCard"
import style from "./main.module.scss"
import gsap from "gsap"

const ThreeProject = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.content}>
				<div className={style.left}>
					<MediaCard
						title='Онлайн чат'
						text='Разработан с использованием React, JWT, MongoDB, Node js. Позволяет регистрироваться учасникам, создавать чаты, отправлять сообщения, фото, файлы и Emoji'
						img='/images/project-303.png'
						web='http://193.187.172.3:5000'
						git='https://github.com/DryunjaS/react-web-chat'
					/>
				</div>
				<div className={style.right}>
					<div class={style.card}>
						<img src='/images/project-301.png' alt='' className='img-project' />
					</div>
					<div class={style.card}>
						<img src='/images/project-302.png' alt='' className='img-project' />
					</div>
					<div class={style.card}>
						<img src='/images/project-303.png' alt='' className='img-project' />
					</div>
					<div class={style.card}>
						<img src='/images/project-304.png' alt='' className='img-project' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThreeProject
