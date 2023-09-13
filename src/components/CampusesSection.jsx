import React from "react";
import CampusesSectionCard from "./CampusesSectionCard";

import "../stylesheets/CampusesSection.scss";

import AsiakwaImg from "../assets/images/asiakwa.png";
import KumasiImg from "../assets/images/kumasi.png";
import TemaImg from "../assets/images/tema.png";

export default function CampusesSection() {
	return (
		<section className="campuses-section">
			<h1 className="--header">Our Campuses</h1>
			<p className="--description">
				Explore Some Of Our Other Prestine Campuses.
			</p>
			<div className="campuses-section__items">
				<CampusesSectionCard
					imgSrc={AsiakwaImg}
					heading="Asiakwa"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum
      ipsum, sunt officiis mollitia dolor velit dolore alias ut atque voluptatum
      ipsa animi, consequatur recusandae."
					direction={"row"}
				/>
				<CampusesSectionCard
					imgSrc={KumasiImg}
					heading="Kumasi"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum
      ipsum, sunt officiis mollitia dolor velit dolore alias ut atque voluptatum
      ipsa animi, consequatur recusandae."
					direction={"row-reverse"}
				/>
				<CampusesSectionCard
					imgSrc={TemaImg}
					heading="Tema"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum
      ipsum, sunt officiis mollitia dolor velit dolore alias ut atque voluptatum
      ipsa animi, consequatur recusandae."
					direction={"row"}
				/>
			</div>
		</section>
	);
}
