import React from "react"
import style from "./main.module.scss"
import MyCarousel from "../../components/Carousel/Carousel"

const SecondBlock = () => {
	return (
		<div className={style.mainSecondBlock}>
			<MyCarousel />
		</div>
	)
}

export default SecondBlock
