import React from "react"
import MediaCard from "../../components/Card/LeftCard"
import style from "./main.module.scss"
import gsap from "gsap"

const FirstProject = () => {
	gsap.fromTo(
		".img-project-1",
		{ opacity: 0, x: -200 },
		{
			x: 0,
			opacity: 1,
			stagger: 0.15,
			scrollTrigger: {
				trigger: ".img-project-1",
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
						title='Сайт магазина обуви'
						text='Разработан с использованием React и TypeScript, анимации из библиотеки
					gsap.'
						img='/images/project-101.png'
						web='http://193.187.172.3:4500'
						git='https://github.com/DryunjaS/shop'
					/>
				</div>
				<div className={style.right}>
					<div class={style.card}>
						<img
							src='/images/project-101.png'
							alt=''
							className='img-project-1'
						/>
					</div>
					<div class={style.card}>
						<img
							src='/images/project-102.png'
							alt=''
							className='img-project-1'
						/>
					</div>
					<div class={style.card}>
						<img
							src='/images/project-103.png'
							alt=''
							className='img-project-1'
						/>
					</div>
					<div class={style.card}>
						<img
							src='/images/project-104.png'
							alt=''
							className='img-project-1'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FirstProject
