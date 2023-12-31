import ReactFullpage from "@fullpage/react-fullpage";
import Home from "@/sections/home/home";
import About from "@/sections/about/about";
import Skills from "@/sections/skills/skills";
import Projects from "./sections/projects/projects";
import Contact from "./sections/contact/Contact";

const Fullpage = () => (
	<ReactFullpage
		credits={{ enabled: false }}
		navigation={true}
		anchors={["home", "about", "skills", "projects", "contact"]}
		navigationTooltips={["home", "about", "skills", "projects", "contact"]}
		controlArrows={false}
		slidesNavigation={true}
		render={() => {
			return (
				<ReactFullpage.Wrapper>
					<Home />
					<About />
					<Skills />
					<Projects />
					<Contact />
				</ReactFullpage.Wrapper>
			);
		}}
	/>
);

export default Fullpage;
