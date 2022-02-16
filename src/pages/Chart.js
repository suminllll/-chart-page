import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import { TwoButton } from '../components/Button';
import BasicChart from '../components/BasicChart';

const Chart = () => {
  const [upload, setUpload] = useState(false);

  const handleCheck = e => {
    const values = e.target.value.includes('chart.json');

    if (values) setUpload(!upload);
  };

  return (
    <Main>
      <Title titleText="Chart" />
      <TwoButton buttonTextFirst="Import" handleCheck={handleCheck} />
      {/* {!upload && <BasicChart />} */}
      <BasicChart />
    </Main>
  );
};

const Main = styled.main`
  margin-left: 18%;
`;
export default Chart;
