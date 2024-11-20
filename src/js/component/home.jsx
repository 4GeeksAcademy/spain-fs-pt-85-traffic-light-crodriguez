import React, {useState} from "react";




//create your first component
const Home = () => {
	const [rojo,setRojo] = useState("redlight")
	const [amarillo,setAmarillo] = useState("yellowlight")
	const [verde,setVerde] = useState("greenlight")

	function iluminar(e) {
		console.log(e.target.className)
		if (e.target.className === "redlight") {
			setRojo("redlight brillo")
			setAmarillo("yellowlight")
			setVerde("greenlight")
		} else if (e.target.className === "yellowlight") {
			setAmarillo("yellowlight brillo")
			setRojo("redlight")
			setVerde("greenlight")
		} else { 
			setVerde("greenlight brillo")
			setAmarillo("yellowlight")
			setRojo("redlight")
		}
					
	}
		
	return (
		<div id="app">
			<div>
				<div className="trafficTop"></div>
				<div className="container">
					<div className={rojo} onClick={iluminar}></div>
					<div className={amarillo} onClick={iluminar}></div>
					<div className={verde} onClick={iluminar}></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
