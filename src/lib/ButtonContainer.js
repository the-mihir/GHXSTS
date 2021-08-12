import styled from 'styled-components';

export const ButtonContainer = styled.button`
	text-transform: uppercase;
	font-size: 20px;
	background: transparent;
	border: 4px solid var(--mainGreen);
	border-color: var(--mainGreen);
	color: #fff;
	padding: 0.9rem;
	cursor: pointer;
	margin: 0.5rem 1rem 0.2rem 0.5rem;
	transition: all 0.3s ease-in-out;
	font-family: '8_bit_1_6';
	:focus {
		outline: none;
	}
`;
