import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import AddNew from './components/AddNew';
import Blog from './components/Blog';

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/">
					<Dashboard />
				</Route>
				<Route path="/create">
					<AddNew />
				</Route>
				<Route path="/posts/:id">
					<Blog />
				</Route>
			</Switch>
		</Router>
	);
}
export default App;
