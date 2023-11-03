import Expertise from "../../components/Expertise";
import Clients from "../../components/Clients";
import Gallery from "../../components/Gallery";
import HeroBanner from "../../components/HeroBanner";
import Feed from "../../components/FeedCard";

export default function Home() {
	return (
		<main>
			<HeroBanner />
			<Expertise />
			<Clients />
			<Gallery />
			<Feed />
		</main>
	);
}
