import "@/App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Fullpage from "@/fullPage";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";

const LogoVariants = {
	initial: {
		opacity: 0,
		y: '-100%',
	},
	animate: {
		opacity: 1,
		y: 0,
	},
};

const App = () => {
	return (
		<>
			<header className="fixed flex justify-between items-center w-full top-2 md:top-0 z-50 px-[4%] py-[2%]">
				<motion.a
					href="#home"
					className="logo flex"
					variants={LogoVariants}
					initial="initial"
					whileInView="animate"
					transition={{
						type: "spring",
						stiffness: 140,
						repeat: Infinity,
						repeatType: "loop",
						repeatDelay: 4,
					}}
				>
					OZ
				</motion.a>
				<a href="#contact" className="btn">
					Contact
				</a>
			</header>
			<div className="hidden md:flex fixed bottom-[4%] left-[4%] gap-4 z-50">
				<a
					href="https://www.github.com/oouazize/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub className="w-10 h-10" />
				</a>
				<a
					href="https://www.linkedin.com/in/oussama-ouazize/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin className="w-10 h-10" />
				</a>
			</div>
			<div className="box-shadow"></div>
			<Fullpage />
			<Analytics />
		</>
	);
};

export default App;
