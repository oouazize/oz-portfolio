import { useEffectOnUpdate } from "@/Hooks/useEffectOnUpdate";
import me from "@/assets/me.png";
// import romb from "@/assets/purple_romb1.png";
import romb from "@/assets/yellow_romb1.png";
import Code from "@/code";
import { useRef } from "react";

export default function About() {
	const observer = useRef<IntersectionObserver>({} as IntersectionObserver);

	useEffectOnUpdate(() => {
		observer.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove("animate__fadeOutUp");
					entry.target.classList.remove("animate__slower");
					entry.target.classList.add("animate__animated");
					entry.target.classList.add("animate__slideInUp");
				} else {
					entry.target.classList.remove("animate__slideInUp");
					entry.target.classList.add("animate__animated");
					entry.target.classList.add("animate__fadeOutUp");
					entry.target.classList.add("animate__slower");
				}
			});
		});

		const slideInDown = document.querySelectorAll(".slideInDown");
		slideInDown.forEach((item) => observer.current.observe(item));

		// Cleanup function to disconnect the observer when the component unmounts
		return () => {
			observer.current.disconnect();
		};
	}, []);
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
			<main id="me" className="slideInDown">
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
						Professionally connected with the web development industry.
						<br />
						<br />
						Problem solver, well-organised person, unwavering attention to
						detail, and an avid runner
						<br />
						<br />
						Passionate about the entire web spectrum, thriving in collaborative
						environments, embracing the opportunity to contribute to innovative
						projects with like-minded teams.
					</p>
				</div>
			</main>
		</section>
	);
}
