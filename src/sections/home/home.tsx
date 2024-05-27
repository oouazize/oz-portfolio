import romb from "/public/yellow_romb1.png";
import dots from "/public/side-dots.png";
import Code from "@/components/code";
import Dev from "../../../public/AnimationDeveloper.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const FadeInUpVariants = {
	initial: {
		y: -200,
	},
	animate: {
		y: 0,
		transition: {
			duration: 0.7,
		},
	},
};

export default function Home() {
	return (
		<section className="section" id="homePage">
			<Code _rotate="rotate-180" xCord="-left-[560px]" yCord="-bottom-[47%]" />
			<img
				className="absolute -z-10 top-0 bottom-0 m-auto right-0 rotate-90"
				src={dots}
				draggable="false"
			></img>
			<motion.img
				variants={FadeInUpVariants}
				initial="initial"
				whileInView="animate"
				className="purple_romb1 hidden md:block bottom-5 right-0 -left-80"
				src={romb}
				draggable="false"
			></motion.img>
			<main>
				<motion.div
					variants={FadeInUpVariants}
					initial="initial"
					whileInView="animate"
					className="flex flex-col md:justify-center text-left md:w-3/4"
				>
					<h1 className=" text-4xl lg:text-6xl flex flex-wrap font-bold items-center">
						Software Developer
					</h1>
					<p className="py-4 md:py-8">
						Resolving design problems, building smart user interfaces and useful
						interactions, developing rich web applications and seamless web
						experiences.
					</p>
					<motion.a
						href="#about"
						whileHover={{
							x: [0, 20, 0, 20],
						}}
						className="text-yellowColor font-semibold cursor-pointer w-fit"
					>
						About me {">"}
					</motion.a>
				</motion.div>
				<div className="flex justify-center items-center">
					<Lottie className="xl:w-4/5" animationData={Dev} />
				</div>
			</main>
		</section>
	);
}
