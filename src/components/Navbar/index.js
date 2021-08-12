import React, { useState, useRef, useEffect } from 'react';

import { links } from '../../lib/data';

import styled from 'styled-components';
import { ButtonContainer } from '../../lib/ButtonContainer';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const [shoButton, setShowButton] = useState(false);
	const [status, setStatus] = useState('close');

	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	const toggleLinks = () => {
		setShowLinks(!showLinks);
		setShowButton(!shoButton);
		// setStatus(!status);
	};
	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = '0px';
		}
	}, [showLinks]);

	return (
		<nav>
			<div className='nav-center'>
				<HeaderWrapper className='nav-header'>
					<Link to='/'>
						<h1 className='logo'>ghxSTS</h1>
					</Link>
					<div className='nav-toggle' onClick={toggleLinks}>
						<div
							className='BurgerMenu__container'
							role='button'
							onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
						>
							<i className={status}></i>
							<i className={status}></i>
							<i className={status}></i>
						</div>
					</div>
				</HeaderWrapper>
				<div className='links-container ml-auto' ref={linksContainerRef}>
					<ul className='links' ref={linksRef}>
						{links.map((link) => {
							const { id, url, text } = link;
							return (
								<li key={id}>
									<Link to={url}>{text}</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<ButtonWrapper shoButton>
					<div className={shoButton ? 'button-link' : 'button-d-none'}>
						<Link to='/collection'>
							<ButtonContainer>My collection</ButtonContainer>
						</Link>
						<Link to='/marketplace'>
							<ButtonContainer>marketplace</ButtonContainer>
						</Link>
					</div>
				</ButtonWrapper>
			</div>
		</nav>
	);
};

export default Navbar;

const HeaderWrapper = styled.div`
	h1 {
		font-family: '8-bit pusab';
		font-size: clamp(2.5rem, 5vw, 3rem);
		cursor: pointer;
		margin-top: 2rem;
	}
	a {
		text-decoration: none;
		color: #fff;
	}
`;

const ButtonWrapper = styled.div`
	margin-top: 1rem;
	margin-left: 2rem;

	// .links li a {
	// 	// font-family: '8_bit_1_6';
	// }

	.button-link {
		display: flex;
		flex-direction: column;

		@media screen and (min-width: 800px) {
			display: block;
			flex-direction: row;
		}
	}

	.button-d-none {
		display: none;

		@media screen and (min-width: 800px) {
			display: block;
			flex-direction: row;
		}
	}
`;
