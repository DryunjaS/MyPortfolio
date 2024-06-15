import React from "react"
import MediaCard from "../../../components/Card/LeftCard"
import style from "./main.module.scss"

const FourProject = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.content}>
				<div className={style.left}>
					<MediaCard
						title='Сайт казино'
						text='Разработан с использованием React, TypeScript, MobX для глобального использования переменных и методов между разными компонентами. Позволяет регистрироваться и авторизироваться пользователям, ставить ставки и играть на колесе фартуны. В планах реализовать пополнение баланса реальными средствами.'
						img='/images/project-402.png'
						web='http://193.187.172.3:4500'
						git='https://github.com/DryunjaS/casino'
					/>
				</div>
				<div className={style.right}>
					<div class={style.card}>
						<img src='/images/project-401.png' alt='' className='img-project' />
					</div>
					<div class={style.card}>
						<img src='/images/project-402.png' alt='' className='img-project' />
					</div>
					<div class={style.card}>
						<img src='/images/project-403.png' alt='' className='img-project' />
					</div>
					<div class={style.card}>
						<img src='/images/project-404.png' alt='' className='img-project' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default FourProject
