import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Highcharts from 'highcharts';

const BasicChart = () => {
  const [data, setData] = useState([]);

  //데이터 받아오기
  useEffect(() => {
    fetch('data/Chart.json')
      .then(res => res.json())
      .then(data => {
        setData(data.res);
      });
  }, []);

  useEffect(() => {
    const chart = Highcharts.chart('request', {
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
      series: [
        {
          name: '',
          data: data[0].data,
        },
      ],
    });
  }, [data]);

  useEffect(() => {
    const chart = Highcharts.chart('request_total', {
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
      series: [
        {
          name: '',
          data: data[1].data,
        },
      ],
    });
  }, [data]);

  return (
    <Wrapper>
      <ChartBox>
        <ChartTitle>Request</ChartTitle>
        <LineChart id="request"></LineChart>
      </ChartBox>
      <ChartBox>
        <ChartTitle>Request Total</ChartTitle>
        <LineChart id="request_total"></LineChart>
      </ChartBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-right: 110px;
  margin-left: 110px;
`;

const ChartBox = styled.div`
  width: 50%;
`;
const ChartTitle = styled.div`
  width: 90%;
  margin: 70px 0px 30px 0;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${({ theme }) => theme.black};
  font-family: ${({ theme }) => theme.font};
`;

const LineChart = styled.div`
  width: 95%;
  height: 273px;
  flex-grow: 0;
  background-color: #fcfcfc;
`;
export default BasicChart;
