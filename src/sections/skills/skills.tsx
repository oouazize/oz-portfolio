import Code from "@/code";
import { skills } from ".";
import "./skills.css";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useEffectOnUpdate } from "@/Hooks/useEffectOnUpdate";

export default function Skills() {
	const [ref, InView] = useInView();
	const [sectionHeight, setSectionHeight] = useState(0);

	useEffectOnUpdate(() => {
		const updateSectionHeight = () => {
			const section = document.getElementById("skillsPage");
			if (section) setSectionHeight(section.offsetHeight);
		};

		updateSectionHeight(); // Initial update
		window.addEventListener("resize", updateSectionHeight);

		return () => {
			window.removeEventListener("resize", updateSectionHeight);
		};
	}, []);

	const icons = skills.map((skill) => {
		return (
			<div
				ref={ref}
				key={skill.name}
				className={`${InView ? "animate__animated animate__fadeInUp" : ""}`}
				style={{ animationDelay: skill.seconds }}
			>
				{skill.svg}
				<p>{skill.name}</p>
			</div>
		);
	});

	return (
		<section className="section" id="skillsPage">
			<Code _rotate="rotate-180" xCord="-left-[560px]" yCord="-bottom-[47%]" />
			<div>
				<h2 className="uppercase font-light opacity-70 mb-0 hidden sm:block md:text-lg">
					A problem is a chance for you to do your best
				</h2>
				<h1 className="font-bold">Skills</h1>
				{sectionHeight > 820 ? <p>
					The main area of expertise is front end development<br /><br />HTML, CSS, JS, building small and medium web applications with React,
					and coding interactive layouts. I have also full-stack developer
					experience with Nest
				</p> : <p>
				The main area of expertise is front end development. I have also full-stack developer
					experience with Nest
				</p>}

				<p>
					Visit my{" "}
					<a
						href="https://www.linkedin.com/in/oussama-ouazize/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Linkedin
					</a>{" "}
					for more details
				</p>
			</div>
			<div className="skills_brands">{icons}</div>
		</section>
	);
}
