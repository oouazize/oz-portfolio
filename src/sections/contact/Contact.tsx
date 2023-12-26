import world from "@/assets/AnimationWorld.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const FadeInUpVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
		},
	},
};

export default function Contact() {
	return (
		<section className="section" id="contactPage">
			<main id="contactMe">
				<div className="min-w-[210px] grid place-content-center">
					<Lottie animationData={world} />
				</div>
				<motion.div
					className="flex flex-col justify-center md:items-center lg:items-start md:max-w-[330px] text-left"
					variants={FadeInUpVariants}
					initial="initial"
					whileInView={"animate"}
				>
					<p>
						What would you do if you had a software expert available at your
						fingertips?
						<br />
						<br />
						Want to start new project? Or just say hey.
					</p>
					<div>
						You can also follow me on{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="text-yellowColor"
							href="https://www.instagram.com/0ussama_0z/"
						>
							Instagram
						</a>
						.
						<h1 className="hover:text-yellowColor text-2xl md:text-3xl lg:text-4xl my-6">
							<a
								target="_blank"
								style={{
									transition: "color 5s cubic-bezier(0.075, 0.82, 0.165, 1)",
								}}
								rel="noopener noreferrer"
								href="mailto:oussamaouaziz123@gmail.com"
							>
								oussamaouaziz123@gmail.com
							</a>
						</h1>
					</div>
				</motion.div>
			</main>
		</section>
	);
}
