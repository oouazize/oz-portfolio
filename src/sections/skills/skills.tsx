import Code from "@/components/code";
import { skills } from ".";
import "./skills.css";
import { useState } from "react";
import { useEffectOnUpdate } from "@/Hooks/useEffectOnUpdate";
import { motion } from "framer-motion";

const FadeInUpVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.015 * index,
			duration: 0.6,
		},
	}),
};

export default function Skills() {
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

	const icons = skills.map((skill, index) => {
		return (
			<motion.div
				key={index}
				variants={FadeInUpVariants}
				initial="initial"
				whileInView={"animate"}
				custom={index}
				style={{ animationDelay: skill.seconds }}
			>
				{skill.svg}
				<p>{skill.name}</p>
			</motion.div>
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
				{sectionHeight > 820 ? (
					<p>
						The main area of expertise is web development
						<br />
						<br />
						HTML, CSS, JS, building small and medium web applications with
						React/Next.js, Node.js, and Supabase
					</p>
				) : (
					<p>The main area of expertise is web development.</p>
				)}

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
