import React, { useState, useEffect } from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import FirstBlock from "../../page/Main/FirstBlock/FirstBlock"
import NavBar from "../AppBar/AppBar"
import SecondBlock from "../../page/Main/SecondBlock/SecondBlock"
import ThreeBlock from "../../page/Main/ThreeBlock/ThreeBlock"
import FourBlock from "../../page/Main/FourBlock/FourBlock"

const SEL = "custom-section"
const SECTION_SEL = `.${SEL}`

const originalColors = ["#22313f", "#22313f", "#22313f", "#22313f"]

const FullPage = () => {
	const [sectionsColor, setSectionsColor] = useState([...originalColors])
	const [currentSlide, setCurrentSlide] = useState(0)
	const [fullpageApi, setFullpageApi] = useState(null)
	const [currentPage, setCurrentPage] = useState("Главная")

	useEffect(() => {
		if (fullpageApi) {
			fullpageApi.setAllowScrolling(true)
		}
	}, [fullpageApi])

	return (
		<div className='App'>
			<NavBar
				currentSlide={currentSlide}
				fullpageApi={fullpageApi}
				currentPage={currentPage}
			/>
			<ReactFullpage
				debug
				licenseKey={"YOUR_KEY_HERE"}
				navigation
				anchors={["Приветствие", "FrontEnd", "BackEnd", "FullStack"]}
				sectionSelector={SECTION_SEL}
				onLeave={(origin, destination, direction) => {
					setCurrentSlide(destination.index)
				}}
				sectionsColor={sectionsColor}
				render={({ fullpageApi }) => {
					setFullpageApi(fullpageApi)
					return (
						<ReactFullpage.Wrapper>
							<div className={SEL}>
								<div className='slide'>
									<FirstBlock />
								</div>
							</div>

							<div className={SEL}>
								<div className='slide hideItem'>
									<SecondBlock />
								</div>
							</div>
							<div className={SEL}>
								<div className='slide'>
									<ThreeBlock />
								</div>
							</div>
							<div className={SEL}>
								<div className='slide'>
									<FourBlock />
								</div>
							</div>
						</ReactFullpage.Wrapper>
					)
				}}
			/>
		</div>
	)
}

export default FullPage
