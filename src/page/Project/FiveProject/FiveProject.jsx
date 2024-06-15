import React from "react"
import MediaCard from "../../../components/Card/LeftCard"
import style from "./main.module.scss"

const FiveProject = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.content}>
				<div className={style.left}>
					<MediaCard
						title='Моделирование участка сети'
						text='Разработан с использованием React, MobX. Позволяет моделировать участки сети на основе ARP-таблицы. Изменять выбранные элементы и удалять их.'
						img='/images/project-501.png'
						web='http://193.187.172.3:4500'
						git='https://github.com/DryunjaS/ARP-graph'
					/>
				</div>
				<div className={style.right}>
					<div class={style.card}>
						<img src='/images/project-501.png' alt='' className='img-project' />
					</div>
					<div class={style.card}>
						<img src='/images/project-502.png' alt='' className='img-project' />
					</div>
					<div class={style.card}>
						<img src='/images/project-503.png' alt='' className='img-project' />
					</div>
					<div class={style.card}>
						<img src='/images/project-504.png' alt='' className='img-project' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default FiveProject
