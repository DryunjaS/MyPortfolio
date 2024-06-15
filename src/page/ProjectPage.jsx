import React, { useState, useEffect } from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import NavBar from "../components/AppBar/AppBar"
import FirstProject from "./Project/FirstProgect/FirstProject"
import SecondProject from "./Project/SecondProject/SecondProject"
import ThreeProject from "./Project/ThreeProject/ThreeProject"
import FourProject from "./Project/FourProject/FourProject"
import FiveProject from "./Project/FiveProject/FiveProject"

const SEL = "custom-section"
const SECTION_SEL = `.${SEL}`

const originalColors = ["#22313f", "#22313f", "#22313f", "#22313f"]

const ProjectPage = () => {
	const [sectionsColor, setSectionsColor] = useState([...originalColors])
	const [currentSlide, setCurrentSlide] = useState(0)
	const [fullpageApi, setFullpageApi] = useState(null)
	const [currentPage, setCurrentPage] = useState("Проекты")

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
				menuItemsValue={["Проект1", "Проект2", "Проект3", "Проект4", "Проект5"]}
			/>
			<ReactFullpage
				debug
				licenseKey={"YOUR_KEY_HERE"}
				navigation
				anchors={["Проект1", "Проект2", "Проект3", "Проект4", "Проект5"]}
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
									<FirstProject />
								</div>
							</div>

							<div className={SEL}>
								<div className='slide'>
									<SecondProject />
								</div>
							</div>
							<div className={SEL}>
								<div className='slide'>
									<ThreeProject />
								</div>
							</div>
							<div className={SEL}>
								<div className='slide'>
									<FourProject />
								</div>
							</div>
							<div className={SEL}>
								<div className='slide'>
									<FiveProject />
								</div>
							</div>
						</ReactFullpage.Wrapper>
					)
				}}
			/>
		</div>
	)
}

export default ProjectPage
