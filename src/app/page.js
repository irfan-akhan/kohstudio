import Expertise from "../../components/Expertise";
import Clients from "../../components/Clients";
import Hero from "../../components/Hero";
import Testimonials from "../../components/Testimonials";
import Why from "../../components/Why";
import Ourteam from "../../components/Ourteam";

export default function Home() {
	return (
		<main>
			<Hero />
			<Why />
			<Expertise />
			<Testimonials />
			<Clients />
			<Ourteam />
		</main>
	);
}
