const HomeComponent = require("./Home");

console.log(HomeComponent);

export const routes = [
	{
		name: "welcome",
		path: "/",
		component: HomeComponent
	}
]