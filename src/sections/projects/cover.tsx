import { motion } from "framer-motion";

export default function Cover() {
	return (
		<div className="slide" id="portfolio">
			<h2 className="uppercase font-light opacity-70 mb-0 hidden sm:block md:text-lg">
				Each project is an opportunity to refine your abilities
			</h2>
			<h1 className="font-bold">Projects</h1>
			<p>
				I've worked on a variety of C, C++, and web programming projects. My
				work showcases my passion for creative coding, ranging from engaging
				games to effective UNIX system administration programs. Explore the
				showcased projects on this site
			</p>
			<p>
				Visit my{" "}
				<a
					href="https://www.github.com/oouazize/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Github
				</a>{" "}
				for more projects
			</p>
			<motion.a
				whileHover={{
					x: [0, 20, 0, 20],
				}}
				className="text-yellowColor font-semibold cursor-pointer"
				href="#projects/1"
			>
				See Projects {">"}
			</motion.a>
		</div>
	);
}
