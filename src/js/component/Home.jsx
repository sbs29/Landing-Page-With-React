import React from "react";

import Navbar from "./Navbar";
import Card from "./Card"
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import "../../styles/index.css";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container" >
				<Jumbotron />
				<div className="card-group cards">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
