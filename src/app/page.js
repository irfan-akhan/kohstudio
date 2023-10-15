import Expertise from "../../components/Expertise";
import Clients from "../../components/Clients";
import Hero from "../../components/Hero";
import Testimonials from "../../components/Testimonials";
import Why from "../../components/Why";
import Ourteam from "../../components/Ourteam";
import HeroBanner from "../../components/HeroBanner";

export default function Home() {
	return (
		<main>
			<Hero />
			<HeroBanner />
			<Why />
			<Expertise order="1" />
			<Testimonials />
			<Clients />
			<Ourteam />
		</main>
	);
}
