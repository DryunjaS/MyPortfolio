import React from "react"
import MediaCard from "../../components/Card/LeftCard"
import style from "./main.module.scss"
import gsap from "gsap"

const FourProject = () => {
	gsap.fromTo(
		".img-project-4",
		{ opacity: 0, x: -200 },
		{
			x: 0,
			opacity: 1,
			stagger: 0.15,
			scrollTrigger: {
				trigger: ".img-project-4",
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
						title='Сайт казино'
						text='Разработан с использованием React, TypeScript, JWT, MobX, Node js для глобального использования переменных и методов между разными компонентами. Позволяет регистрироваться и авторизироваться пользователям, ставить ставки и играть на колесе фартуны. В планах реализовать пополнение баланса реальными средствами.'
						img='/images/project-402.png'
						web='http://193.187.172.3:4500'
						git='https://github.com/DryunjaS/casino'
					/>
				</div>
				<div className={style.right}>
					<div class={style.card}>
						<img
							src='/images/project-401.png'
							alt=''
							className='img-project-4'
						/>
					</div>
					<div class={style.card}>
						<img
							src='/images/project-402.png'
							alt=''
							className='img-project-4'
						/>
					</div>
					<div class={style.card}>
						<img
							src='/images/project-403.png'
							alt=''
							className='img-project-4'
						/>
					</div>
					<div class={style.card}>
						<img
							src='/images/project-404.png'
							alt=''
							className='img-project-4'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FourProject
