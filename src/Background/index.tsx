import React, { ElementType } from 'react';

import styled, { css } from 'styled-components';

import { BackgroundProps, ComponentProps } from '@src/types';

import { Overlay } from './Overlay';

export interface BackgroundInterface extends ComponentProps {
  src?: string;
  alt?: string;
  overlay?: boolean;
}

const BackgroundComponent = ({ children, overlay, src, ...rest }: BackgroundInterface) => (
  <div role="img" {...rest}>
    {children}
    {overlay && <Overlay />}
  </div>
);

const BackgroundStyled = styled(BackgroundComponent)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;

  /**
    If the image is a custom component, it might require some styling to fit correctly
    */
  ${({ src, children }: BackgroundInterface) => {
    if (!children && !src) {
      return css`
        background: lightgrey;
      `;
    } else if (src) {
      return css`
        background-image: ${`url(${src})`};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `;
    }
  }}
`;

export const Background: ElementType<BackgroundProps> = ({
  renderCustomBackground,
  backgroundImage,
}) => {
  const imageBackground = Boolean(backgroundImage) && (
    <BackgroundStyled overlay {...backgroundImage} />
  );
  const customBackground = Boolean(renderCustomBackground) && renderCustomBackground();

  return (
    <>
      {customBackground}
      {imageBackground}
    </>
  );
};
