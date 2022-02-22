import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Nav = () => {
  const [inputStatus, setInputStatus] = useState(''); //메뉴 클릭시 해당 아이디로 갱신해주는 state
  const navigate = useNavigate(); //메뉴 클릭시 해당 페이지로 전환

  //메뉴를 클릭하면 실행되는 함수
  const handleColor = id => {
    setInputStatus(id); //inputStatus가 클릭한 id로 갱신된다
    navigate(`/${id}`); //메뉴 클릭시 받아온 id 페이지로 전환
  };

  return (
    <Wrapper>
      {/* 로고 */}
      <LogoBox></LogoBox>
      {/* 버튼 */}
      <>
        {/* changeColor가 참이 되면 스타일 컴포넌트의 조건문에서 true가 되면서 색깔이 바뀜 */}
        <LNB_MeNU_A
          id="project"
          onClick={() => handleColor('project')}
          changeColor={inputStatus === 'project'}
        >
          <Menu_Name>Project List</Menu_Name>
        </LNB_MeNU_A>
        <LNB_MeNU_B
          id="chart"
          onClick={() => handleColor('chart')}
          changeColor={inputStatus === 'chart'}
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

const Category = styled.div`
  width: 100%;
  height: 40px;
  margin: 20px 0;
  padding: 10px 20px 10px 30px;
  cursor: pointer;
`;

const LNB_MeNU_A = styled(Category)`
  background-color: ${change =>
    change.changeColor ? 'rgba(44, 120, 255, 0.25)' : 'inherit'};
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
