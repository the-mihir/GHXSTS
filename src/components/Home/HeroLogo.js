import React from 'react';
import LogoNo1 from '../../images/logo-dappradar.png';
import LogoNo2 from '../../images/logo-dapp.png';
import LogoNo3 from '../../images/logo-lootex.png';
import styled from 'styled-components';

const HeroLogo = () => {
	return (
		<LogoWrapper className='container my-5 text-center'>
			<h5>also seen on:</h5>
			<div className='footer-img-wrapper'>
				<div className='row'>
					<div className='col-md-10 mx-auto text-center'>
						<img src={LogoNo1} alt='' className='img-fluid' />
						<img src={LogoNo2} alt='' className='img-fluid' />
						<img src={LogoNo3} alt='' className='img-fluid' />
					</div>
				</div>
			</div>
		</LogoWrapper>
	);
};

export default HeroLogo;

const LogoWrapper = styled.div`
	h5 {
		font-family: '8-bit pusab';
		font-size: 20px;
	}
`;
