import { BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style/main.scss"

import AppRoutes from "./router/AppRouters"

function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	)
}

export default App
