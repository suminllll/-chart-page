import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import { TwoButton } from '../components/Button';
import BasicChart from '../components/BasicChart';
import Highcharts from 'highcharts';

const Chart = () => {
  const [upload, setUpload] = useState(false); //json 파일이면 조건부 렌더링에서 true가 될 state
  const [data, setData] = useState([]); //Chart.json에서 데이터를 담을 state

  //Chart.json에서 데이터를 가져옴
  useEffect(() => {
    fetch('data/Chart.json')
      .then(res => res.json())
      .then(data => {
        setData(data.res);
      });
  }, []);

  //첫번째 차트

  useEffect(() => {
    async function chartRequest() {
      const chart = await Highcharts.chart('request', {
        // const chart = Highcharts.chart('request', {
        chart: {
          type: 'line',
        },
        title: {
          text: '',
        },
        yAxis: {
          title: '',
        },
        yAxis: {
          title: {
            text: '',
          },
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            name: '',
            data: data[0].data,
          },
        ],
      });
    }
    chartRequest();
  }, [!upload]);

  //두번째 차트

  useEffect(() => {
    async function chartTotal() {
      const chart = await Highcharts.chart('request_total', {
        // const chart = Highcharts.chart('request_total', {
        chart: {
          type: 'line',
        },
        title: {
          text: '',
        },
        yAxis: {
          title: '',
        },
        yAxis: {
          title: {
            text: '',
          },
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            name: '',
            data: data[1].data,
          },
        ],
      });
    }
    chartTotal();
  }, [!upload]);

  //import 버튼을 누르면 실행되는 함수
  //해당 파일이 json 파일이면 조건부 렌더링으로 차트가 나타남
  const handleCheck = e => {
    const values = e.target.value.includes('chart.json');

    if (values) setUpload(!upload);
  };

  return (
    <Main>
      <Title titleText="Chart" />
      <TwoButton buttonTextFirst="Import" handleCheck={handleCheck} />
      {upload && (
        <BasicChart
          data={data}
          request="request"
          request_total="request_total"
        />
      )}
    </Main>
  );
};

const Main = styled.main`
  margin-left: 18%;
`;
export default Chart;
