import { useState } from "react";
import "./stylesheets/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import DidYouKnow from "./components/DidYouKnow";

export default function App() {
	const [showNav, setShowNav] = useState(false);

	return (
		<>
			<header>
				<Navbar show={showNav} setShowNav={setShowNav} />
				<Hero />
			</header>

			<VideoSection />
			{/* <SuccessSection /> */}
			<DidYouKnow />
		</>
	);
}
