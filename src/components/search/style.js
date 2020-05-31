import styled from 'styled-components';
import { Input } from 'antd';

import media from '../media';

export const InputX = styled(Input)`
  align-self: center;
  width: 50%;
  margin-bottom: 10px;

  ${media.tablet`
      width:75%
      `}

  ${media.mobile`
      width:100%
      `}
`;
