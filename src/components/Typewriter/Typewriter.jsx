import React, { useState, useEffect } from "react"
import style from "./typewriter.module.scss"

const Typewriter = ({ text, delay = 50, infinite = false }) => {
	const [currentText, setCurrentText] = useState("")
	const [currentIndex, setCurrentIndex] = useState(0)

	// Обновляем currentIndex и currentText при изменении text или infinite
	useEffect(() => {
		// Сбрасываем текущий текст и индекс при изменении текста
		setCurrentText("")
		setCurrentIndex(0)
	}, [text, infinite])

	// Основной эффект для эмуляции машинописи
	useEffect(() => {
		let timeout

		if (currentIndex < text.length) {
			timeout = setTimeout(() => {
				setCurrentText((prevText) => prevText + text[currentIndex])
				setCurrentIndex((prevIndex) => prevIndex + 1)
			}, delay)
		} else if (infinite) {
			timeout = setTimeout(() => {
				setCurrentIndex(0)
				setCurrentText("")
			}, delay)
		}

		return () => clearTimeout(timeout)
	}, [currentIndex, delay, infinite, text])

	return <span className={style.typewriter}>{currentText}</span>
}

export default Typewriter
