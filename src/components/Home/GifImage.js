import React from 'react';
import { gifImages } from '../../lib/data';
import styled from 'styled-components';
const GifImage = () => {
	return (
		<ImageContainer className='my-5 container-fluid text-center'>
			<div className='img-wrapper'>
				{gifImages.map((gif) => (
					<img
						key={gif.id}
						src={gif.img}
						alt=''
						className='img-gif img-fluid'
						style={{ width: '82px' }}
					/>
				))}
			</div>
		</ImageContainer>
	);
};

export default GifImage;

const ImageContainer = styled.div``;
