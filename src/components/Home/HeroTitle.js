import React from 'react';
import styled from 'styled-components';

const HeroTitle = () => {
	return (
		<TitleContainer className='container text-center'>
			<div className='title-item my-5'>
				<h5>learn more</h5>
				<h1>what are ghxsts?</h1>
				<p>
					GHXSTS is an AI generated NFT art on Binance Smart Chain. 5555 AI NFT
					GHXSTS will ever exist.
				</p>
			</div>

			<div className='title-item my-5'>
				<h5>only 5555 minted</h5>
				<h1>limited edition</h1>
				<p>
					Use them as pictures or your avatar, store them in a safe place. Only
					5,555 Ghxsts will be minted. Don't miss your chance to buy them!
				</p>
			</div>

			<div className='title-item my-5'>
				<h5>platform</h5>
				<h1>binance smart chain</h1>
				<p>
					By purchasing a ghxst developed on the BEP-721 standard smart
					contract, you contribute to the further the evolution of Binance Smart
					Chain (BSC).
				</p>
			</div>
		</TitleContainer>
	);
};

export default HeroTitle;

const TitleContainer = styled.div`
	.title-item {
		margin: 100px 0 !important;
	}
	h5 {
		margin: 20px 0;
		color: #6c6c6c;
		text-transform: uppercase;
		margin: 3.5rem 0;
		font-family: '8-bit pusab';
		font-size: 1.5rem;
	}
	h1 {
		font-family: '8-bit pusab';
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: bold;
		text-transform: uppercase;
		margin: 20px 0;
		line-height: 3.2rem;
		line-height: 5rem;
	}

	p {
		font-size: 3rem;
		margin: 20px 0;
		line-height: 3.5rem;
		font-family: 'Avenir LT Std 45 Book' !important;
	}
`;
