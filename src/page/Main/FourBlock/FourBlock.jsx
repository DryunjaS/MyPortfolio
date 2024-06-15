import React from "react"
import Birds from "../../../components/Birds/Birds"
import style from "./main.module.scss"

const FourBlock = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.content}>
				<div class={`${style.ratio} ${style.title}`}>Fullstack</div>

				<div className={style.scaledСontainer}>
					<Birds />
				</div>
				<div class={style.itemWrapper}>
					<div class={`${style.ratio}`}>Frontend</div>
					<div class={`${style.ratio} `}>Backend</div>
				</div>
			</div>
		</div>
	)
}

export default FourBlock
