import React from 'react';
import RecentlyListed from './RecentlyListed';
import TopListings from './TopListings';
import RecentlySold from './RecentlySold';

const Marketplace = () => {
	return (
		<div>
			<RecentlyListed />
			<TopListings />
			<RecentlySold />
		</div>
	);
};

export default Marketplace;
