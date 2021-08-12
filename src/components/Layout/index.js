import React from 'react';
import Footer from '../Footer/Index';
import Navbar from '../Navbar/index';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
