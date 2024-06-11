import React from "react"
import gsap from "gsap"
import { observer } from "mobx-react-lite"
import FullPage from "../components/FullPage/FullPage"

const MainPage = () => {
	gsap.fromTo(
		".section-about > *",
		{ opacity: 0, x: -200 },
		{
			x: 0,
			opacity: 1,
			stagger: 0.1,
			scrollTrigger: {
				trigger: ".section-about",
				start: "top bottom",
				end: "center",
				scrub: true,
			},
		}
	)
	gsap.fromTo(
		".section-graph-title",
		{ opacity: 0, y: -200 },
		{
			y: 0,
			opacity: 1,
			stagger: 0.1,
			scrollTrigger: {
				trigger: ".section-graph-body",
				start: "top bottom",
				end: "center",
				scrub: true,
			},
		}
	)
	return (
		<div>
			<FullPage />
		</div>
	)
}

export default observer(MainPage)
