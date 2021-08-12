import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Fonts Link
import '../src/fonts/8-bit-pusab.ttf';
import '../src/fonts/8bit16.ttf';
import '../src/fonts/Net-AvenirLTStd-Book.ttf';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
