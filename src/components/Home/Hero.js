import React from 'react';
import styled from 'styled-components';
import Twitter from '../../images/twit.png';
import { ButtonContainer } from '../../lib/ButtonContainer';

const Hero = () => {
	return (
		<>
			<MainWrapper className='container text-center mt-4'>
				<h2>---- ghxsts minted</h2>
				<div className='twitter-img my-5'>
					<img src={Twitter} alt='' className='img-fluid' />
				</div>
				<div className='main-title'>
					<h1 className='col-md-10 mx-auto'>
						10,000 haunting Ghxsts NFT living on the Binance network!
					</h1>
				</div>
				<div className='row  mt-4'>
					<div className='col-md-10 mx-auto text-center'>
						<ButtonContainer>my collection</ButtonContainer>
						<ButtonContainer>marketplace</ButtonContainer>
					</div>
				</div>
			</MainWrapper>
		</>
	);
};

export default Hero;
const MainWrapper = styled.div`
	img {
		width: 40%;
	}
	h1 {
		font-family: '8-bit pusab';
		text-transform: uppercase;
		font-size: clamp(1rem, 4.5vw, 2.8rem);
		line-height: 5rem;
	}
	h2 {
		color: var(--mainGreen);
		text-transform: uppercase;
		font-family: '8-bit pusab';
		font-size: clamp(1rem, 4.5vw, 2.8rem);
	}
	h2 {
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: bold;
		line-height: 3rem;
	}
	span {
		letter-spacing: -4px;
		margin-right: -20px;
	}
	@media screen and (max-width: 800px) {
		img {
			width: 50%;
		}
		h2 {
			font-size: 1.3rem;
			line-height: 2.5rem;
		}
	}
`;
