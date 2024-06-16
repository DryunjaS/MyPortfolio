// import React, { useState, useEffect } from "react"
// import ReactFullpage from "@fullpage/react-fullpage"
// import NavBar from "../components/AppBar/AppBar"
// import FirstSkills from "./Skills/FirstSkills"

// const SEL = "custom-section"
// const SECTION_SEL = `.${SEL}`

// const originalColors = ["#22313f", "#22313f", "#22313f", "#22313f"]

// const SkillsPage = () => {
// 	const [sectionsColor, setSectionsColor] = useState([...originalColors])
// 	const [currentSlide, setCurrentSlide] = useState(0)
// 	const [fullpageApi, setFullpageApi] = useState(null)
// 	const [currentPage, setCurrentPage] = useState("Навыки")

// 	useEffect(() => {
// 		if (fullpageApi) {
// 			fullpageApi.setAllowScrolling(true)
// 		}
// 	}, [fullpageApi])

// 	return (
// 		<div className='App'>
// 			<NavBar
// 				currentSlide={currentSlide}
// 				fullpageApi={fullpageApi}
// 				currentPage={currentPage}
// 				menuItemsValue={["Мои навыки"]}
// 			/>
// 			<ReactFullpage
// 				debug
// 				licenseKey={"YOUR_KEY_HERE"}
// 				navigation
// 				anchors={["Мои навыки"]}
// 				sectionSelector={SECTION_SEL}
// 				onLeave={(origin, destination, direction) => {
// 					setCurrentSlide(destination.index)
// 				}}
// 				sectionsColor={sectionsColor}
// 				render={({ fullpageApi }) => {
// 					setFullpageApi(fullpageApi)
// 					return (
// 						<ReactFullpage.Wrapper>
// 							<div className={SEL}>
// 								<div className='slide'>{/* <FirstSkills /> */}</div>
// 							</div>
// 						</ReactFullpage.Wrapper>
// 					)
// 				}}
// 			/>
// 		</div>
// 	)
// }

// export default SkillsPage
