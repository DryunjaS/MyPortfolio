import MainPage from "../page/MainPage"
import ProjectPage from "../page/ProjectPage"

export const publicRoutes = [
	{
		path: "/",
		Component: MainPage,
	},
	{
		path: "/project",
		Component: ProjectPage,
	},
]
