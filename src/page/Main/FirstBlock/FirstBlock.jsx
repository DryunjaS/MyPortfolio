import React from "react"
import style from "./main.module.scss"
import Typewriter from "../../../components/Typewriter/Typewriter"
import gsap from "gsap"

const FirstBlock = () => {
	gsap.fromTo(
		".myFoto",
		{ opacity: 0, x: -200 },
		{
			x: 0,
			opacity: 1,
			stagger: 0.1,
			scrollTrigger: {
				trigger: ".myFoto",
				start: "center",
				end: "center",
				scrub: false,
			},
		}
	)
	return (
		<div className={style.wrapper}>
			<div className={style.content}>
				<div className={style.left}>
					<img src='/images/my-foto.jpg' alt='my-foto' className='myFoto' />
				</div>
				<div className={style.right}>
					<h1 className={style.title}>
						Добро{" "}
						<Typewriter text='пожаловать на мой сайт портфолио!' delay={30} />
					</h1>
					<div className={style.text}>
						Я fullstack web-разваботчик. Занимаюсь созданием сайтов и
						кросс-платформенных web-приложений на языке JavaScript
					</div>
				</div>
			</div>
		</div>
	)
}

export default FirstBlock
