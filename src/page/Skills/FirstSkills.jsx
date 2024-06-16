// import React, { useEffect } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// const FirstSkills = () => {
// 	useEffect(() => {
// 		const galleryItems = document.querySelectorAll(".gallery-column-item")

// 		galleryItems.forEach((element) => {
// 			gsap.set(element, { scale: 0 })

// 			gsap.to(element, {
// 				duration: 1.2,
// 				scale: 1,
// 				ease: "power2.out",
// 				scrollTrigger: {
// 					trigger: element,
// 					start: "top bottom-=100",
// 					end: "bottom top+=100",
// 					toggleActions: "play reverse play reverse",
// 				},
// 			})
// 		})
// 	}, [])

// 	const createArray = (start, length) =>
// 		Array.from({ length }, (_, i) => i + start)

// 	const arrays = [createArray(1, 5), createArray(6, 5), createArray(12, 5)]

// 	return (
// 		<div className='wrapper'>
// 			<div className='gallery'>
// 				{arrays.map((array, index) => (
// 					<div className='gallery-column' key={index}>
// 						{array.map((numItem) => (
// 							<img
// 								key={numItem}
// 								src={`/images/skills/skills${numItem}.png`}
// 								alt=''
// 								className='gallery-column-item'
// 							/>
// 						))}
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	)
// }

// export default FirstSkills
