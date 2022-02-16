import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { OneButton } from '../components/Button';

const Import = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data/Project_list.json')
      .then(res => res.json())
      .then(data => {
        setData(data.res);
      });
  }, []);

  return (
    <>
      {data.map(data => {
        const service = data.service_list;
        return (
          <Wrapper key={data.project_name}>
            <ProWrap>
              <div>
                <Pro>{data.project_name}</Pro>
                <Creator>Creator:{data.creator}</Creator>
              </div>
              <OneButton buttonText="Add service" />
            </ProWrap>

            <BoardWrap>
              <Table>
                <thead>
                  <tr>
                    <TheadTd>Service name</TheadTd>
                    <TheadTd>Creation date</TheadTd>
                    <TheadTd>ㅤㅤㅤ</TheadTd>
                  </tr>
                </thead>
                <tbody>
                  {service.map(service => {
                    return (
                      <tr key={service.service_name}>
                        <TbodyTd style={{ paddingLeft: '134.5px' }}>
                          {service.service_name}
                        </TbodyTd>
                        <TbodyTd>{service.creation_date}</TbodyTd>
                        <TbodyTd style={{ width: '20px' }}>
                          <TbodyBtn>Delete</TbodyBtn>
                        </TbodyTd>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </BoardWrap>
          </Wrapper>
        );
      })}
    </>
  );
};

const Wrapper = styled.div`
  margin: 5% 0 5% 9.4%;
`;

const ProWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
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

const BoardWrap = styled.div`
  height: 322px;
  margin-right: 9.8%;
  border: 1px solid lightblue;
`;

const Table = styled.table`
  width: 100%;
`;

const TheadTd = styled.td`
  padding-top: 14px;
  padding-left: 94.5px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  background-color: #ebebeb;
  color: ${({ theme }) => theme.black};
  font-family: ${({ theme }) => theme.font};
`;

const TbodyTd = styled.td`
  padding-top: 34px;
  padding-left: 90px;
  height: 90px;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  border-bottom: 1px solid #dfdfdf;
  background-color: #fcfcfc;
  color: ${({ theme }) => theme.black};
  font-family: ${({ theme }) => theme.font};
`;

const TbodyBtn = styled.button`
  margin-right: 36.5px;
  align-items: center;
  width: 116px;
  height: 31px;
  border-radius: 2px;
  border-style: none;
  font-size: 14px;
  background-color: #dfdfdf;
`;

export default Import;
