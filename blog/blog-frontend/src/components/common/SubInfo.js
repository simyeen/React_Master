import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const SubInfoBlock = styled.div`
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[4]};
    padding-right: 0.25rem;
    padding-left: 0.25rem;
    content: '\\B7';
  }
`;

const SubInfo = ({ username, pubilshedDate, hasMarginTop }) => {
  return (
    <SubInfoBlock>
      <span>
        <b>
          <Link to={`/@${username}`}> {username}</Link>
        </b>
      </span>
      {new Date(pubilshedDate).toDateString()}
    </SubInfoBlock>
  );
};

export default SubInfo;
