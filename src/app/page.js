import Expertise from "../../components/Expertise";
import Hero from "../../components/Hero";
import Testimonials from "../../components/Testimonials";
import Why from "../../components/Why";

export default function Home() {
	return (
		<main>
			<Hero />
			<Why />
			<Expertise order="1" />
			<Testimonials />
		</main>
	);
}
