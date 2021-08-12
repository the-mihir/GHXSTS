import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';
const Question = ({ title, info }) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<QuestionWrapper className=' container my-2 '>
			<div
				className='col-md-9 mx-auto question '
				onClick={() => setShowInfo(!showInfo)}
			>
				<header className='row '>
					<div className='question-container '>
						<h4 className='mt-3'>{title}</h4>
						<button className='icon'>{showInfo ? '-' : '+'}</button>
					</div>
				</header>
				{showInfo && <p>{info}</p>}
				{/* <hr style={{ border: '2px solid #6c6c6c' }} /> */}
			</div>
		</QuestionWrapper>
	);
};

export default Question;

const QuestionWrapper = styled.article`
	.question {
		background: #1b1b1c;
		padding: 1.2rem 2.5rem;
		cursor: pointer;
		border-radius: 0.2rem;
	}

	h4 {
		font-family: '8-bit pusab';
		font-size: 16px;
	}
	.question-container {
		min-width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.icon {
		background: transparent;
		border-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		color: #fff;
		cursor: pointer;
		margin-left: 1rem;
		align-self: center;
		min-width: 2rem;
		outline: none;
		border: none;
		font-size: 3.5rem;
		font-weight: bold;
	}
	p {
		line-height: 2.5rem;
		text-align: left;
		font-family: 'Avenir LT Std 45 Book' !important;
		font-size: 2rem;
		padding: 2rem;
	}
	@media screen and (max-width: 800px) {
		h4,p, .q-btn {
			font-size: .9rem;

	}

	@media screen and (max-width: 360px) {
		h4,p, .q-btn {
			font-size: .6rem;

	}
`;
