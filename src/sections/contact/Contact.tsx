import { useEffectOnUpdate } from "@/Hooks/useEffectOnUpdate";
import world from "@/assets/AnimationWorld.json";
import Lottie from "lottie-react";
import { useRef } from "react";

export default function Contact() {
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

		const slideInUp = document.querySelectorAll(".slideInUp");
		slideInUp.forEach((item) => observer.current.observe(item));

		// Cleanup function to disconnect the observer when the component unmounts
		return () => {
			observer.current.disconnect();
		};
	}, []);

	return (
		<section className="section" id="contactPage">
			<main id="contactMe">
				<div className="min-w-[210px] grid place-content-center">
					<Lottie animationData={world} />
				</div>
				<div className="slideInUp flex flex-col justify-center md:items-center lg:items-start md:max-w-[330px] text-left">
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
				</div>
			</main>
		</section>
	);
}
