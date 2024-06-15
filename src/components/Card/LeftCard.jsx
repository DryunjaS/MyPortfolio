import style from "./card.module.scss"

export default function MyLeftCard({ value }) {
	return (
		<div className={style.card}>
			<div className={style.left}>{value.text}</div>
			<div className={style.right}>
				<img src={`/images/${value.img}`} alt='' />
			</div>
		</div>
	)
}
