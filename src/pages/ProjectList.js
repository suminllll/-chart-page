import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import { TwoButton } from '../components/Button';
import Import from '../components/Import';

const ProjectList = () => {
  const [upload, setUpload] = useState(false);

  const handleCheck = e => {
    const values = e.target.value.includes('project_list.json');

    if (!values) alert('Unknown json format.');
    else setUpload(upload);

    if (values) setUpload(!upload);
  };

  return (
    <Main>
      <Title titleText="Project list" />
      <TwoButton
        buttonTextFirst="Import"
        buttonTextSecond="Export"
        handleCheck={handleCheck}
      />
      {/* {!upload && <EmptyData>Have no data</EmptyData>} */}
      {/* {upload && <Import />} */}
      <Import />
    </Main>
  );
};

const Main = styled.main`
  margin-left: 18%;
`;

const EmptyData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 951px;
  height: 90px;
  margin: 40px 75px 810px 0;
  font-size: 18px;
  letter-spacing: normal;
  color: ${({ theme }) => theme.black};
  font-family: ${({ theme }) => theme.font};
`;
export default ProjectList;
