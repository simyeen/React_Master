import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const AuthTemplateBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: ${palette.gray[8]};

  display: flex;
  flex-direction: colunm;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const WhiteBox = styled.div`
  /* padding: 2rem; */
  max-width: 37.5rem;
  min-height: 100vh;

  background: white;
  position: relatvie;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">MOAT</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
