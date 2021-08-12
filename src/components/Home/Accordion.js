import React, { useState } from 'react';
import styled from 'styled-components';
import { questions } from '../../lib/data';
import SingleQuestion from './Question';

const Accordion = () => {
	const [accordion, setAccordion] = useState(questions);
	return (
		<QuestionsWrapper className='container text-center '>
			<h5 className='mb-4'>learn more</h5>
			<h2 className='mb-4'>F.A.Q</h2>

			<section className='info'>
				{accordion.map((question) => {
					return (
						<SingleQuestion key={question.id} {...question}></SingleQuestion>
					);
				})}
			</section>
		</QuestionsWrapper>
	);
};

export default Accordion;

const QuestionsWrapper = styled.main`
	padding-bottom: 5rem;
	h5 {
		margin: 20px 0;
		color: #6c6c6c;
		text-transform: uppercase;
		margin-bottom: 3.5rem !important;
		font-family: '8-bit pusab';
		font-size: 1.5rem;
	}

	h2 {
		font-family: '8-bit pusab';
		font-size: 3rem;
		margin-bottom: 3.5rem !important;
	}
`;
