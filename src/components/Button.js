import React from 'react';
import styled from 'styled-components';

export const TwoButton = ({
  buttonTextFirst,
  buttonTextSecond,
  handleCheck,
}) => {
  return (
    <ButtonWrap>
      <ButtonFrame>
        <>
          <ButtonText>
            {buttonTextFirst}
            <File onChange={handleCheck} />
          </ButtonText>
        </>
        <>{buttonTextSecond && <ButtonText>{buttonTextSecond}</ButtonText>}</>
      </ButtonFrame>
    </ButtonWrap>
  );
};

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 9.4%;
`;

const ButtonFrame = styled.div`
  display: flex;
  text-align: center;
  margin-right: 112px;
`;

const File = styled.input.attrs({
  id: 'file',
  type: 'file',
})`
  display: none;
`;

const ButtonText = styled.label`
  display: inline-block;
  width: 8.4vw;
  height: 40px;
  padding-top: 11.5px;
  margin-right: 29px;
  border-radius: 2px;
  cursor: pointer;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blue};
  font-family: ${({ theme }) => theme.font};
`;

export const OneButton = ({ buttonText, handleAlert }) => {
  return (
    <ButtonFrame
      onClick={handleAlert}
      style={{
        marginRight: '141px',
      }}
    >
      <OneButtonText>{buttonText}</OneButtonText>
    </ButtonFrame>
  );
};

const OneButtonText = styled.button`
  text-align: center;
  width: 8.4vw;
  height: 40px;
  border-style: none;
  border-radius: 2px;
  cursor: pointer;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blue};
  font-family: ${({ theme }) => theme.font};
`;
