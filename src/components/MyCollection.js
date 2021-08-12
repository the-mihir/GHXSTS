import React, { useState } from 'react';
import styled from 'styled-components';
import { myCollections } from '../../src/lib/data';
import breakpoint from '../../src/lib/utils/breakpoints';

const MyCollection = () => {
	const [gifs, setGifs] = useState(myCollections);

	return (
		<>
			<MyCollectionWrapper>
				<div className='header my-5  '>
					<div className='container title_wrapper py-3'>
						<p id='title'> my collection (4)</p>
					</div>
				</div>
				<div className='gif_wrapper container mb-5'>
					{gifs.map((gif) => (
						<li className='text-center'>
							<img key={gif.id} src={gif.img} alt='gif' className='img-fluid' />
							<p>{gif.gif_number}</p>
							<button id='btn_1'>send </button>
							<button>trade </button>
						</li>
					))}
				</div>
			</MyCollectionWrapper>
		</>
	);
};

export default MyCollection;

const MyCollectionWrapper = styled.div`
	// height: 100vh;
	.header {
		height: 5rem;
		background: #1b1b1c;

		.title_wrapper {
			height: 100%;
			display: flex;
			align-items: center;

			#title {
				color: var(--mainGreen);
				padding: 0;
				margin: 0;
				font-size: 3rem;
				text-transform: uppercase;
				font-family: '8_bit_1_6';
			}
		}
	}

	.gif_wrapper {
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
		grid-template-rows: 1fr;
		gap: calc(1rem + 0.2%);
		margin-right: 0 auto;

		li {
			list-style: none;
			text-align: center;

			img {
				// width: min(250px, calc(70% + 100px));
				height: 250px;
				background-color: #1b1b1c;
				margin-bottom: 1rem;
			}

			p {
				font-family: '8-bit pusab';
				font-size: 2rem;
			}

			button {
				text-transform: uppercase;
				font-size: 1.5rem;
				background: transparent;
				border: 3px solid var(--mainGreen);
				color: #fff;
				padding: 0.9rem;
				cursor: pointer;
				margin: 0.5rem 0 0.2rem 0;
				transition: all 0.3s ease-in-out;
				font-family: '8_bit_1_6';
				:focus {
					outline: none;
				}
			}
		}
		// li:first-child img {
		// 	background: yellow;
		// }

		// li:nth-child(3) img {
		// 	background: green;
		// }
	}

	//--------------------------

	@media only screen and ${breakpoint.device.xs} {
	}

	@media only screen and ${breakpoint.device.sm} {
	}

	@media only screen and ${breakpoint.device.lg} {
		color: orange;
	}
`;
