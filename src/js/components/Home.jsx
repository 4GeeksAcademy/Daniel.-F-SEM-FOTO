import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <div className="trafficTop"></div>
			<div className="container"></div>
			<div className="red light selected"></div>
			<div className="yellow light"></div>
			<div className="green light"></div>
			<button>cambio de color</button>
		</div>
	);
};

export default Home;