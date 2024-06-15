import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

export default function MediaCard({ title, text, img, web, git }) {
	return (
		<Card sx={{ maxWidth: 500 }}>
			<CardMedia sx={{ height: 200 }} image={img} title='Cайт магазина обуви' />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{text}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>
					<a
						href={web}
						target='_blank'
						style={{ textDecoration: "none", color: "inherit" }}
					>
						На сайт
					</a>
				</Button>
				<Button size='small'>
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
