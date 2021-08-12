import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { topListed } from '../../lib/data';

const TopListings = () => {
	return (
		<TopListingsWrapper>
			<div className='container-fluid'>
				<div className='top_list_wrapper my-5'>
					<div className='container my-4'>
						<h2 id='header'>Top Listings</h2>
					</div>
					<div className='row d-flex align-items-center justify-content-between'>
						<div className='arrow_icon col-md-1'>
							<i className=' text-right fas fa-chevron-left'></i>
						</div>
						<div className='container gif_container col-md-10'>
							{topListed.map((gif) => (
								<li key={gif.id}>
									<img src={gif.img} alt='GIF' className='img-fluid' />
									<p>{gif.gif_number}</p>
								</li>
							))}
						</div>
						<div className='arrow_icon col-md-1'>
							<i class=' text-right  fas fa-chevron-right'></i>
						</div>
					</div>
					<div className='container mt-3 text-right'>
						<Link to='/view_more'>
							<h4 id='view_bnt'>View More +</h4>
						</Link>
					</div>
				</div>
			</div>
		</TopListingsWrapper>
	);
};

export default TopListings;
const TopListingsWrapper = /*css*/ styled.div`
	height: 100%;
	.top_list_wrapper {
		margin-bottom: 5rem;
		#header {
			font-family: '8-bit pusab';
		}

		.row {
			.fas {
				background: none;
				font-size: 3rem;
				color: #fff;
				cursor: pointer;
			}
		}

		.gif_container {
			display: grid;
			justify-content: center;
			grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
			grid-template-rows: 1fr;
			gap: calc(0.5rem + 0.2%);
			text-align: center;
			background: #1b1b1c;
			li {
				list-style: none;

				p {
					font-size: 1.4rem;
					font-family: '8-bit pusab';
					margin-top: 0.5rem;
				}
				img {
					width: 25rem;
				}
			}

			li:nth-child(1) img {
				background: #f30101;
			}
			li:nth-child(2) img {
				background: #2da708;
			}
			li:nth-child(3) img {
				background: #f3f3f3;
			}
			li:nth-child(4) img {
				background: #f30101;
			}
			li:nth-child(5) img {
				background: #2da708;
			}
			li:nth-child(6) img {
				background: #f3f3f3;
			}

			li:nth-child(7) img {
				background: #f30101;
			}
			li:nth-child(8) img {
				background: #2da708;
			}
			li:nth-child(9) img {
				background: #f3f3f3;
			}
			li:nth-child(10) img {
				background: #f30101;
			}
			li:nth-child(11) img {
				background: #2da708;
			}
			li:nth-child(12) img {
				background: #f3f3f3;
			}
		}
		#view_bnt {
			color: #fff;
			font-family: '8-bit pusab';
			font-size: 0.9rem;
			cursor: pointer;
		}
	}
	a:hover {
		text-decoration: none;
	}
`;
