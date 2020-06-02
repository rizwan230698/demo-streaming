import styled from 'styled-components';
import media from '../media';

export const ErrorImageOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 300px;

  ${media.mobile`
  width: 200px;
  height: 200px;
  `}
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;

  ${media.mobile`
  font-size:24px;
  `}
`;
