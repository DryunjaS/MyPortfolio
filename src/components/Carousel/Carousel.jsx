import Carousel from "react-bootstrap/Carousel"
import MyChart from "../Chart/Chart"
import "./carousel.scss"

function MyCarousel() {
	return (
		<>
			<blockquote contenteditable='true' className='blockquote'>
				<q>
					И запомни, в скрипке самое главное это лак, а как она играет это уже
					другое дело
				</q>
				<br />
				<cite>Это и есть суть Frontend</cite>
			</blockquote>
			<Carousel data-bs-theme='light'>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='/images/frontend-3.jpg'
						alt='First slide'
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='/images/frontend-2.jpg'
						alt='First slide'
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='/images/frontend-6.jpg'
						alt='First slide'
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='/images/frontend.jpg'
						alt='First slide'
					/>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className='d-block w-100'
						src='/images/react.jpg'
						alt='Third slide'
					/>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className='d-block w-100'
						src='/images/frontend-5.jpg'
						alt='Third slide'
					/>
				</Carousel.Item>
			</Carousel>
		</>
	)
}

export default MyCarousel
