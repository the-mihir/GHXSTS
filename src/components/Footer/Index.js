import React from 'react';
import styled from 'styled-components';
import Twitter from '../../images/twitter.png';
import Telegram from '../../images/telegram.png';
import Discord from '../../images/discord.png';

const Footer = () => {
	return (
		<FooterWrapper>
			<div className='container text-center'>
				<h5 id='footer_title'>Communicate with us</h5>
				<h1>join our community</h1>
				<h6 id='footer_decs'>
					Join Us on our Twitter, Discord, and Telegram. The more community
					members, the more profitable your purchase is.
				</h6>
				<div className='row my-5'>
					<div className='mx-auto text-center social-Wrapper '>
						<div className='social-item'>
							<h2 className='icon_header'>twitter</h2>
							<img src={Twitter} alt='Twitter' className='img-fluid' />
						</div>
						<div className='social-item'>
							<h2 className='icon_header'>telegram</h2>
							<img src={Telegram} alt='Twitter' className='img-fluid' />
						</div>
						<div className='social-item'>
							<h2 className='icon_header'>discord</h2>
							<img src={Discord} alt='Twitter' className='img-fluid' />
						</div>
					</div>
				</div>

				<p id='footer-text'>
					Ghxsts themselves are free of charge. But it is needed to pay a gas
					fee.
				</p>
			</div>
		</FooterWrapper>
	);
};

export default Footer;
const FooterWrapper = styled.div`
	background: #1b1b1c;
	padding: 1.5rem 0;

	h1 {
		font-family: '8-bit pusab';
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: bold;
		text-transform: uppercase;
		margin: 20px 0;
		line-height: 3.2rem;
		line-height: 5rem;
	}

	#footer_title {
		color: #6c6c6c;
		text-transform: uppercase;
		margin: 2rem 0 3rem 0;
		font-family: '8-bit pusab';
		font-size: 1.5rem;
	}

	.icon_header {
		font-size: 1.3rem;
		font-family: '8-bit pusab';
		margin-bottom: 1.8rem;
		font-weight: 500;
	}

	#footer_decs {
		font-size: clamp(1.5rem, 5vw, 3rem);
		line-height: 4.5rem;
		margin: 20px 0 10px 0;
		text-transform: capitalize;

		font-family: 'Avenir LT Std 45 Book';
	}
	#footer-text {
		font-family: '8_bit_1_6';
		font-size: 2rem;
		line-height: 3rem;
	}

	.social-Wrapper {
		width: 70%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		text-transform: uppercase;
	}

	.social-Wrapper img {
		width: 80px;
		cursor: pointer;
	}
`;
