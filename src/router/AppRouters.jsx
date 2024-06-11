import { Navigate, Route, Routes } from "react-router-dom"
import { publicRoutes } from "./routes"

function AppRoutes() {
	return (
		<Routes>
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}
			<Route path='/*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default AppRoutes
