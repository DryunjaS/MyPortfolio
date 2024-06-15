import style from "./appbar.module.scss"
import { useNavigate } from "react-router-dom"

const NavBar = ({ fullpageApi, currentSlide, currentPage, menuItemsValue }) => {
	const pageItems = ["Главная", "Проекты", "Навыки", "Контакты"]
	const menuItems = menuItemsValue
	const navigate = useNavigate()

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
	}

	return (
		<div className={style.navBar}>
			<ul className={style.pageMenu}>
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
			<ul className={style.navMenu}>
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
		</div>
	)
}

export default NavBar
