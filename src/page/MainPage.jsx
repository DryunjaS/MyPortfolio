import React from "react"
import { observer } from "mobx-react-lite"
import FullPage from "../components/FullPage/FullPage"

const MainPage = () => {
	return (
		<div>
			<FullPage />
		</div>
	)
}

export default observer(MainPage)
