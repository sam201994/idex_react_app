import React from 'react';
import styled from 'styled-components';

import { DarkGrey } from './textTypes';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ebebeb;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 25px;
  z-index: 3;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <DarkGrey size={8}>© 2020 - IDEX Limited</DarkGrey>
    </FooterContainer>
  );
}
