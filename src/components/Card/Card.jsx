import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"

export default function ActionAreaCard({ value }) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea sx={{ display: "flex" }}>
				<CardMedia
					component='img'
					height='500'
					width='800'
					image={`/images/${value.img}`}
					alt='green iguana'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{value.title}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{value.text}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
