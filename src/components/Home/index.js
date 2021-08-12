import React from 'react';
import Accordion from './Accordion';
import GifImage from './GifImage';
import Hero from './Hero';
import HeroLogo from './HeroLogo';
import HeroTitle from './HeroTitle';

import ParticlesBackground from '../../lib/utils/ParticlesBackground';

const Home = () => {
	return (
		<div>
			<ParticlesBackground />
			<Hero />
			<GifImage />
			<HeroLogo />
			<HeroTitle />
			<Accordion />
		</div>
	);
};

export default Home;
