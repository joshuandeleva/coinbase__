import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./Components/Home/Home";
function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path={ROUTES.HOME} component={Home} />
			</Router>
		</div>
	);
}
export default App;
