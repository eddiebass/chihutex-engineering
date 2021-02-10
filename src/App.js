import "./App.css";
import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";

function App() {
	return (
		<div>
			<GlobalStyle />
			<HomePage />
			<Footer />
		</div>
	);
}

export default App;
