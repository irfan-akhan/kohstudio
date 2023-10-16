import Expertise from "../../components/Expertise";
import Clients from "../../components/Clients";
import Hero from "../../components/Hero";
import Testimonials from "../../components/Testimonials";
import Why from "../../components/Why";
import Ourteam from "../../components/Ourteam";
import Gallery from "../../components/Gallery";

export default function Home() {
	return (
		<main>
			<Hero />
			{/* <Why /> */}
			<Expertise />
			{/* <Testimonials /> */}
			<Clients />
			<Gallery />
			{/* <Ourteam /> */}
		</main>
	);
}
