import Clients from "../../components/Clients";
import Hero from "../../components/Hero";
import Testimonials from "../../components/Testimonials";
import Ourteam from "../../components/Ourteam";

export default function Home() {
	return (
		<main>
			<Hero />
			<Testimonials />
			<Clients />
			<Ourteam />
		</main>
	);
}
