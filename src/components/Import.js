import React, { useEffect } from 'react';
import styled from 'styled-components';
import { OneButton } from '../components/Button';

const Import = () => {
  return (
    <Wrapper>
      <ProWrap>
        <div>
          <Pro>Pro1</Pro>
          <Creator>Creator:user1</Creator>
        </div>
        <OneButton buttonText="Add service" />
      </ProWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 9.4%;
  margin-top: 5%;
`;

const ProWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Pro = styled.span`
  margin-right: 26%;
  font-size: 30px;
  line-height: normal;
  letter-spacing: normal;
  font-family: ${({ theme }) => theme.font};
`;

const Creator = styled.span`
  height: 17px;
  margin-top: 12px;
  font-size: 14px;
  line-height: normal;
  letter-spacing: normal;
  font-family: ${({ theme }) => theme.font};
`;

export default Import;
