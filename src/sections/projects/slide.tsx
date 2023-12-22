import Pong from "@/assets/Pong.png";
import MarketHub from "@/assets/MarketHub.png";
import Webserv from "@/assets/webserver.png";
import { useMemo } from "react";

type project = {
	title: string;
	header: string;
	desc: string;
	tech: string;
	link: string;
	demo?: string;
	color: string;
};

const myProjectsData: project[] = [
	{
		title: "Pong",
		header: "Web Game Application",
		desc: "Multiplayer online game & chat platform.",
		tech: "React, Node, Nest, TypeScript, P5.js, Docker, SASS, tailwind CSS, PostgreSQL, TypeORM",
		link: "https://github.com/oouazize/Transcendence",
		demo: "https://www.linkedin.com/posts/oussama-ouazize_dear-linkedin-network-i-am-thrilled-activity-7112902404987084800-ajtQ/?utm_source=share&utm_medium=member_desktop",
		color: "text-pink-500",
	},
	{
		title: "MarketHub",
		header: "E-commerce marketplace",
		desc: "Online store for selling apparel & electronics.",
		tech: "React, Node, Nest, TypeScript, SASS, tailwind CSS, PostgreSQL, Prisma, Docker",
		link: "https://github.com/mmounib/Ecommerce-Website",
		color: "text-purple-500",
	},
	{
		title: "Webserv",
		header: "HTTP Web Server",
		desc: "Basic web server that is capable of handling HTTP requests and serving static files.",
		tech: "C, C++",
		link: "https://github.com/oouazize/Web-Server",
		color: "text-sky-500",
	},
];

export default function Slide({ id }: { id: string }) {
	const myProjects = useMemo(() => myProjectsData, []);

	const key = +id[id.length - 1];

	const images = [Pong, MarketHub, Webserv];
	const { title, header, desc, tech, link, demo, color } = myProjects[key];

	return (
		<div className="slide" id={id}>
			<div
				className={`flex justify-between gap-4 ${
					key % 2 ? "flex-col-reverse md:flex-row-reverse" : "flex-col-reverse md:flex-row"
				}`}
			>
				<div className="text-left md:w-2/5">
					<h2 className="uppercase font-light opacity-70 mb-0 md:text-lg">
						{header}
					</h2>
					<h1 className="text-6xl mb-4 md:mb-8 mt-2">{title}</h1>
					<p className="text-lg my-4">{desc}</p>
					<p className="text-lg mb-6 md:mb-12">
						<strong>Built with: </strong>
						{tech}
					</p>
					<a
						className={`block w-fit font-bold mb-2 ${!demo && color}`}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
					>
						View the code {" >"}
					</a>
					{demo && (
						<a
							className={`block w-fit font-bold ${color}`}
							href={demo}
							target="_blank"
							rel="noopener noreferrer"
						>
							View the demo {" >"}
						</a>
					)}
				</div>
				<div className="flex justify-center items-center md:w-3/5">
					<img
						src={images[key]}
						draggable="false"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
}
