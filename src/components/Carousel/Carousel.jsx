import Carousel from "react-bootstrap/Carousel"
import ActionAreaCard from "../Card/Card"
import store from "../../store/store"

const MyCarousel = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<Carousel.Caption>
					{/* <ActionAreaCard value={store.cards[3]} /> */}
					<img src='/images/frontend.jpg' alt='' />
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Carousel.Caption>
					<img src='/images/frontend.jpg' alt='' />
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Carousel.Caption>
					<img src='/images/frontend.jpg' alt='' />
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}

export default MyCarousel
