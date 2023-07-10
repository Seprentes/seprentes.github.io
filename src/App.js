import { Route, Routes, Link } from "react-router-dom";
import IndexPage from "./Routes/IndexPage";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import "./App.css"

function App() {
	return (
		<>
			<div id="top-panel">
				<Link to="/">Özgür Ateş Fırat</Link>
				<div className="right">
					<Link to="/about">About Me</Link>
					<Link to="/contact">Contact Me</Link>
				</div>
			</div>
			<div id="main">
				<Routes>
					<Route path="/" Component={IndexPage} />
					<Route path="/about" Component={About} />
					<Route path="/contact" Component={Contact} />
				</Routes>
			</div>
		</>
	);
}

export default App;
