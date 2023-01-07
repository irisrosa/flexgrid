import { transparentize } from 'polished';
import styled from 'styled-components';

import { ComponentProps } from '@src/types';

export const Overlay = styled.div<ComponentProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: ${({ theme }) => transparentize(0.45, '#4B4B4B')};
  z-index: 0;
`;
