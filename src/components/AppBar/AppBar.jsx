import style from "./appbar.module.scss"

const NavBar = ({ fullpageApi, currentSlide, currentPage }) => {
	const pageItems = ["Главная", "Проекты", "Навыки", "Контакты"]
	const menuItems = ["Приветствие", "FrontEnd", "BackEnd", "FullStack"]

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
						onClick={() => fullpageApi.moveTo(el)}
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
