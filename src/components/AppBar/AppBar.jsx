import { useEffect, useState } from "react"
import style from "./appbar.module.scss"
import { useNavigate } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

const NavBar = ({
	fullpageApi,
	currentSlide,
	setCurrentSlide,
	currentPage,
	menuItemsValue,
}) => {
	const pageItems = ["Главная", "Проекты", "Навыки", "Контакты"]
	const menuItems = menuItemsValue
	const navigate = useNavigate()
	const [isActive, setIsActive] = useState(false)

	const toggleIsActive = () => {
		setIsActive(!isActive)
	}

	const handleLink = (link) => {
		switch (link) {
			case "Главная":
				navigate("/")
				break
			case "Проекты":
				navigate("/project")
				break
			case "Навыки":
				navigate("/skills")
				break
			case "Контакты":
				navigate("/contacts")
				break
			default:
				navigate("/")
		}
		setCurrentSlide(0)
	}

	return (
		<div
			className={
				isActive ? `${style.navBar} ${style.navBarActive}` : style.navBar
			}
		>
			<ul
				className={
					isActive
						? `${style.pageMenu} ${style.pageMenuActive}`
						: style.pageMenu
				}
			>
				{pageItems.map((el, index) => (
					<li
						key={index}
						className={`${
							currentPage === pageItems[index]
								? `${style.pageItem} ${style.pageItemisCurrent}`
								: `${style.pageItem}`
						}`}
						onClick={() => handleLink(el)}
					>
						{el}
					</li>
				))}
			</ul>
			<ul
				className={
					isActive ? `${style.navMenu} ${style.navMenuActive}` : style.navMenu
				}
				onClick={toggleIsActive}
			>
				{menuItems.map((el, index) => (
					<li
						key={index}
						className={`${
							currentSlide === index
								? `${style.isCurrent} ${style.navItem}`
								: `${style.navItem}`
						}`}
						onClick={() => fullpageApi.moveTo(el)}
					>
						{el}
					</li>
				))}
			</ul>

			<button className={style.burgerMune} onClick={toggleIsActive}>
				{isActive ? <CloseIcon /> : <MenuIcon />}
			</button>
		</div>
	)
}

export default NavBar
