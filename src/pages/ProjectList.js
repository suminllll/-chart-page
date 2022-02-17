import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import { TwoButton } from '../components/Button';
import Import from '../components/Import';
import swal from 'sweetalert';
import '../components/Alert.css';

const ProjectList = () => {
  const [upload, setUpload] = useState(false); //json 파일이면 조건부 렌더링에서 true가 될 state
  const [data, setData] = useState([]); //Project_list.json에서 데이터를 담을 state
  const [inputData, setInputData] = useState([]); //alert input에서 입력된 데이터를 갱신해줄 state
  let values = []; //import button을 클릭하고 뜨는 alert input의 값을 담을 변수

  //Project_list.json에서 데이터를 가져옴
  useEffect(() => {
    fetch('data/Project_list.json')
      .then(res => res.json())
      .then(data => {
        setData(data.res);
      });
  }, []);

  //import 버튼을 누르면 실행되는 함수
  //해당 파일이 json 파일이면 조건부 렌더링으로 no data가 사라지고 게시판이 나타남
  const handleCheck = e => {
    const values = e.target.value.includes('project_list.json');

    if (!values) alert('Unknown json format.');
    else setUpload(upload);

    if (values) setUpload(!upload);
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

  return (
    <Main>
      <Title titleText="Project list" />
      <TwoButton
        buttonTextFirst="Import"
        buttonTextSecond="Export"
        handleCheck={handleCheck}
      />
      {!upload && <EmptyData>Have no data</EmptyData>}
      {upload && (
        <Import data={data} handleAlert={handleAlert} inputData={inputData} />
      )}
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
