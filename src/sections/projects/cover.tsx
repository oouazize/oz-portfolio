export default function Cover() {
	return (
		<div className="slide" id="portfolio">
			<h2 className="uppercase font-light opacity-70 mb-0 hidden sm:block md:text-lg">
				Every project is a canvas for honing your skills
			</h2>
			<h1 className="font-bold">Projects</h1>
			<p>
				I've crafted diverse projects spanning C, C++, and web development. From
				captivating games to efficient UNIX system administration tools, my work
				reflects a passion for creative coding. Explore the showcased projects
				on this site
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
			<a
				className="text-yellowColor font-semibold cursor-pointer"
				href="#projects/1"
			>
				See Projects {">"}
			</a>
		</div>
	);
}