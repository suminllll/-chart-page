import React from 'react';
import styled from 'styled-components';

const Title = ({ titleText }) => {
  return (
    <TitleBox>
      <TitleText>{titleText}</TitleText>
    </TitleBox>
  );
};

const TitleBox = styled.div`
  display: flex;
`;

const TitleText = styled.div`
  width: 100%;
  height: 15vh;
  margin: 132px 0 0 9%;
  font-size: 3em;
  font-weight: bold;
  letter-spacing: normal;
  color: ${({ theme }) => theme.black};
  font-family: ${({ theme }) => theme.font};
`;
export default Title;
