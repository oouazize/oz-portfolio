import me from "@/public/me.png";
import romb from "@/public/yellow_romb1.png";
import Code from "@/components/code";
import { motion } from "framer-motion";

const FadeInUpVariants = {
	initial: {
		y: 100,
	},
	animate: {
		y: 0,
		transition: {
			duration: 0.6,
		},
	},
};

export default function About() {
	return (
		<section className="section" id="aboutPage">
			<Code xCord="-right-[560px]" yCord="-bottom-[52%]" />
			<img
				className="purple_romb1 hidden md:block top-24 right-96"
				src={romb}
				draggable="false"
				loading="lazy"
			></img>
			<img
				className="md:w-1/2 max-w-[400px] absolute top-[40%] md:top-[42%] left-[55%] md:left-[45%] -translate-y-1/2 -translate-x-1/2 -z-10 grayscale opacity-30"
				src={me}
				draggable="false"
				loading="lazy"
			/>
			<motion.main
				id="me"
				variants={FadeInUpVariants}
				initial="initial"
				whileInView={"animate"}
			>
				<div className="text-left pt-4">
					<h1 className="text-5xl lg:text-6xl font-bold">
						Hi, I'm
						<br />
						Oussama Ouazize
					</h1>
					<p className="animatoo opacity-80 font-medium mt-4">
						Web Developer - JavaScript & OOP Fan - UI/UX Designer
					</p>
				</div>
				<div className="flex justify-center items-center text-left 4xl:m-auto max-w-3xl">
					<p className="xl:right-8 relative md:mr-4 font-medium">
						Professionally involved in web development.
						<br />
						<br />
						An organizer, problem solver, detail-obsessed individual, and
						passionate runner
						<br />
						<br />
						Passionate about the entire web spectrum, thriving in collaborative
						environments, enjoying working on innovative projects with
						like-minded individuals.
					</p>
				</div>
			</motion.main>
		</section>
	);
}
