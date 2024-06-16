import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import style from "./main.module.scss"

export default function MediaCard({ title, text, img, web, git }) {
	return (
		<Card className={style.wrapper}>
			<CardMedia
				image={img}
				title='Cайт магазина обуви'
				className={style.content}
			/>
			<CardContent className={style.body}>
				<Typography
					gutterBottom
					variant='h5'
					component='div'
					className={style.title}
				>
					{title}
				</Typography>
				<Typography
					variant='body2'
					color='text.secondary'
					className={style.text}
				>
					{text}
				</Typography>
			</CardContent>
			<CardActions className={style.btnWrapp}>
				<Button size='small' className={style.btn}>
					<a
						href={web}
						target='_blank'
						style={{ textDecoration: "none", color: "inherit" }}
					>
						На сайт
					</a>
				</Button>
				<Button size='small' className={style.btn}>
					<a
						href={git}
						target='_blank'
						style={{ textDecoration: "none", color: "inherit" }}
					>
						В GitHub
					</a>
				</Button>
			</CardActions>
		</Card>
	)
}
