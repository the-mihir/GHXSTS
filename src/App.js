import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Test from './components/Test.js';
import MyCollection from './components/MyCollection';

import ViewMore from './components/ViewMore';
import Marketplace from './components/Marketplace';
import GhxstsDetails from './components/Marketplace/GhxstsDetails';

// import ParticlesBackground from './lib/utils/ParticlesBackground';

function App() {
	return (
		<>
			{/* <ParticlesBackground /> */}
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/test' component={Test} />
					<Route path='/collection' component={MyCollection} />
					<Route path='/marketplace' component={Marketplace} />
					<Route path='/view_more' component={ViewMore} />
					<Route path='/details' component={GhxstsDetails} />
				</Switch>
			</Layout>
		</>
	);
}

export default App;
