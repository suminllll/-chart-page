import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { OneButton } from '../components/Button';
import swal from 'sweetalert';
import '../components/Alert.css';

const Import = () => {
  const [data, setData] = useState([]); //Project_list.json에서 데이터를 담을 state
  const [inputData, setInputData] = useState([]); //alert input에서 입력된 데이터를 갱신해줄 state
  let values = []; //import button을 클릭하고 뜨는 alert input의 값을 담을 변수

  //현재날짜 구하기
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const hours = now.getHours();
  const min = now.getMinutes();
  let today = `${year}.${month}.${day} ${hours}:${min}`;

  //Project_list.json에서 데이터를 가져옴
  useEffect(() => {
    fetch('data/Project_list.json')
      .then(res => res.json())
      .then(data => {
        setData(data.res);
      });
  }, []);

  useEffect(() => {
    return () => {
      onRemove();
    };
  }, [onRemove]);

  const onRemove = id => {
    setData(data.filter(list => list !== id));
  };
  //import button 누르면 실행되는 함수, alert 라이브러리 사용
  const handleAlert = e => {
    swal({
      title: 'Service name',
      content: 'input',
      buttons: ['Cancel', 'Add'],
    }).then(result => {
      const lower = result.toLowerCase();

      //값이 소문자이거나 숫자이면 값을 추가함
      if (result === lower || result >= 0) {
        //inputData에 입력된 값으로 갱신해준다
        setInputData(values.concat(result));
      } else {
        swal({
          //라이브러리라서 위치 이동이 어려워 있는 그대로 사용
          title: 'Service name',
          content: 'input',
          buttons: ['Cancel', 'Add'],
          text: 'only lowercase letters and numbers allowed.',
        });
      }
    });
  };

  // useEffect(data => {
  //console.log(data);
  // setData(data.filter(list => list !== id));
  // console.log(data);
  // }, []);
  // const onRemove = id => {
  //   console.log(id);
  //   setData(data.filter(list => list !== id));
  //   console.log(data);
  // };

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
              <OneButton buttonText="Add service" handleAlert={handleAlert} />
              {/* <Alert /> */}
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

                  {inputData.map((value, index) => {
                    return (
                      <tr key={index}>
                        <TbodyTd style={{ paddingLeft: '134.5px' }}>
                          {value}
                        </TbodyTd>
                        <TbodyTd>{today}</TbodyTd>
                        <TbodyTd style={{ width: '20px' }}>
                          <TbodyBtn onClick={onRemove}>Delete</TbodyBtn>
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
