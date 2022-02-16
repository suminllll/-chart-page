import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Nav = () => {
  const [changeColor, setChangeColor] = useState(false);
  const navigate = useNavigate();

  const handleColor = id => {
    setChangeColor(!changeColor);
    navigate(`/${id}`);
  };

  return (
    <Wrapper>
      {/* 로고 */}
      <LogoBox>
        <ImgBox>
          <Img />
        </ImgBox>
      </LogoBox>
      {/* 버튼 */}
      <>
        <LNB_MeNU_A
          id="project"
          onClick={() => handleColor('project')}
          changeColor={changeColor}
        >
          <Menu_Name>Project List</Menu_Name>
        </LNB_MeNU_A>
        <LNB_MeNU_B
          id="chart"
          onClick={() => handleColor('chart')}
          changeColor={changeColor}
        >
          <Menu_Name>Chart</Menu_Name>
        </LNB_MeNU_B>
      </>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  width: 265px;
  height: 100%;
  left: 0;
  background-color: #202020;
`;

const LogoBox = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.blue};
`;

const ImgBox = styled.div`
  width: 96.5px;
  height: 100%;
  margin-left: 15px;
`;

const Img = styled.img.attrs({
  alt: 'logoImg',
  src: '/images/Logo.png',
})`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Category = styled.div`
  width: 100%;
  height: 40px;
  margin: 20px 0;
  padding: 10px 20px 10px 30px;
  cursor: pointer;
`;

const LNB_MeNU_A = styled(Category)`
  background-color: ${change =>
    change.changeColor ? 'inherit' : 'rgba(44, 120, 255, 0.25)'};
`;

const LNB_MeNU_B = styled(Category)`
  background-color: ${change =>
    change.changeColor ? 'rgba(44, 120, 255, 0.25)' : 'inherit'};
`;

const Menu_Name = styled.div`
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.font};
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
`;

export default Nav;
