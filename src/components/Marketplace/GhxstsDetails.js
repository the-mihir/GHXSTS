import React from 'react';
import styled from 'styled-components';
import Gif from '../../images/myCollection.gif';

const GhxstsDetails = () => {
	return (
		<Details className='container py-5'>
			<div className='row'>
				<div className='col-md-4'>
					<div className='img_container mt-5 mb-3'>
						<img src={Gif} alt='' className='img-fluid' />
					</div>
					<div className='btn_container'>
						<div className='row'>
							<div className='col-md-12'>
								<button id='btn_buy'>buy</button>
								<button id='btn_sell'>sell</button>
							</div>
							<div className='col-md-12'>
								<button id='btn_offer'>make offer</button>
							</div>
						</div>
					</div>
				</div>
				<div className='col-md-8'>
					<div className='description_container mt-5'>
						<div className='desc_1 row d-flex justify-content-between py-4 px-4 mb-3 decs'>
							<h2>#1657</h2>
							<h2>Rank: #1</h2>
						</div>

						<div className='desc_2 row d-flex text-center py-4 px-4 mb-3 decs'>
							<h6>
								This Ghxst is Currently owned by adderss <span>DX5555</span>This
								Ghxst has not been listed for sale
							</h6>
						</div>

						<div className='desc_2 row d-flex text-center mb-3 py-4 px-4 decs'>
							<h5>mouth: straight</h5>
						</div>
						<div className='desc_2 row d-flex text-center mb-3 py-4 px-4 decs'>
							<h5>eyes: normal</h5>
						</div>

						<div className='desc_2 row d-flex text-center mb-3 py-4 px-4 decs'>
							<h5>hat: blue snapback</h5>
						</div>

						<div className='desc_2 row d-flex text-center mb-3 py-4 px-4 decs'>
							<h5>prop: money</h5>
						</div>

						<div className='desc_2 row d-flex text-center mb-3 py-4 px-4 decs'>
							<h5>bg color: transparent</h5>
						</div>
					</div>
				</div>
			</div>
			<div className='row py-5'>
				<table class='table '>
					<thead>
						<tr>
							<th scope='col'>First</th>
							<th scope='col'>Last</th>
							<th scope='col'>Handle</th>
							<th scope='col'>Handle</th>
							<th scope='col'>Handle</th>
						</tr>
					</thead>
					<tbody>
						<tr className='tr_1'>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>@mdo</td>
							<td>@mdo</td>
						</tr>
						<tr className='tr_2'>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
							<td>@fat</td>
							<td>@fat</td>
						</tr>
						<tr className='tr_3'>
							<td>Larry the Bird</td>
							<td className='td_hide'>@twitter</td>
							<td>@twitter</td>
							<td>@twitter</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Details>
	);
};

export default GhxstsDetails;
const Details = styled.div`
	.img_container {
		background: #1b1b1c;
		width: 30rem;
	}
	.btn_container {
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
			font-family: '8-bit pusab';
			:focus {
				outline: none;
			}
		}

		#btn_buy {
			width: 15rem;
		}
		#btn_sell {
			width: 15rem;
		}
		#btn_offer {
			width: 30rem;
		}
	}

	.description_container {
		.decs {
			background: #1b1b1c;
			text-transform: uppercase;
			font-family: '8-bit pusab';
		}
		.desc_1 {
			h2 {
				font-family: '8-bit pusab';
				font-size: 1.8rem;
			}
			h2:nth-child(1) {
				color: var(--mainGreen);
			}
		}

		.desc_2 {
			span {
				color: var(--mainGreen);
			}
			h6 {
				line-height: 2.5rem;
				font-size: 1.2rem;
			}
		}
	}

	.table {
		border: none;
		text-transform: uppercase;
		font-family: '8-bit pusab';
		text-align: center;

		thead {
			th {
				border: none !important;
			}
		}

		tbody {
			tr {
				border: none !important;
				td {
					border: none !important;
				}
			}
		}

		.tr_1 {
			background: #d28787;
		}
		.tr_2 {
			background: #ad0707;
		}
		.tr_3 {
			background: #2ead07;
		}
	}
`;
