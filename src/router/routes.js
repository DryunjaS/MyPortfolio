import MainPage from "../page/MainPage"
import ProjectPage from "../page/ProjectPage"
// import SkillsPage from "../page/SkillsPage"

export const publicRoutes = [
	{
		path: "/",
		Component: MainPage,
	},
	{
		path: "/project",
		Component: ProjectPage,
	},
	// {
	// 	path: "/skills",
	// 	Component: SkillsPage,
	// },
]
