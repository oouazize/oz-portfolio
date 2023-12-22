import Slide from "./slide";
import Cover from "./cover";
import "./projects.css";
import Code from "@/code";

export default function Projects() {
	return (
		<section className="section" id="projectsPage">
			<Code xCord="-right-[560px]" yCord="-bottom-[52%]" />
			<Cover />
			<Slide id="slide0" />
			<Slide id="slide1" />
			<Slide id="slide2" />
		</section>
	);
}
