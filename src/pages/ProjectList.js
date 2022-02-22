import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import { TwoButton } from '../components/Button';
import Import from '../components/Import';
import swal from 'sweetalert';
import '../components/Alert.css';

const ProjectList = () => {
  //현재날짜 구하기
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const hours = now.getHours();
  const min = now.getMinutes();
  let today = `${year}.${month}.${day} ${hours}:${min}`;

  const [upload, setUpload] = useState(false); //json 파일이면 조건부 렌더링에서 true가 될 state
  const [data, setData] = useState([]); //Project_list.json에서 input 데이터를 담을 state
  const [inputData, setInputData] = useState([]); //alert input에서 입력된 데이터를 갱신해줄 state
  const [check, setCheck] = useState(false); //handleAlert함수에서 조건에 만족하면 true로 바꿀 state
  //import button을 클릭하고 뜨는 alert input의 값을 담을 state
  const [inputs, setInputs] = useState({
    service_name: '',
  });

  const { service_name } = inputs;

  const nextId = useRef(0);

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
  const handleCheck = useCallback(e => {
    const values = e.target.value.includes('project_list.json');

    if (!values) alert('Unknown json format.');
    else setUpload(upload);

    if (values) setUpload(!upload);
  }, []);

  //게시물을 추가함
  useEffect(() => {
    if (check && inputs) {
      //user에 추가할 내용을 기재하고
      const user = {
        id: nextId.current,
        service_name,
        creation_date: today,
      };
      //inputData를 복사하고 user를 추가한다
      setInputData([...inputData, user]);
      nextId.current += 1; //id에 +1을 더해줌
    }
  }, [check]);

  //import button 누르면 실행되는 함수, alert 라이브러리 사용
  const handleAlert = () => {
    swal({
      title: 'Service name',
      content: 'input',
      buttons: ['Cancel', 'Add'],
    }).then(result => {
      const lower = result.toLowerCase();
      const num = result >= 0;

      //값이 소문자이거나 숫자이면 값을 추가함
      if (result === lower || num) {
        //inputs에 입력된 값으로 갱신해주고
        //check를 true로 반환
        setInputs({
          service_name: result,
        });
        setCheck(!check);
        setCheck(true);
      } else {
        swal({
          //라이브러리라서 위치 이동이 어려워 있는 그대로 사용
          title: 'Service name',
          text: 'only lowercase letters and numbers allowed.',
          buttons: 'confirm',
        });
      }
    });
  };

  //파일 다운로드 하는 함수, onDownloadBtn에서 인수를 받아온다
  const downloadFile = async ({ data, fileName, fileType }) => {
    //파일로 다운로드할 데이터로 Blob를 만든다 [Blob이란? (Binary Large Object, 블랍) 이미지, 사운드, 비디오와 같은 멀티미디어 데이터를 다룰 때 사용]
    const blob = new Blob([data], { type: fileType });
    // a태그를 생성하고 해당 요소에 클릭 이벤트를 보낸다
    // 다운로드를 한다
    const link = document.createElement('a');
    link.download = fileName;
    link.href = await URL.createObjectURL(blob);

    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    link.dispatchEvent(clickEvt);
    link.remove();
  };

  //버튼을 클릭하면 실행되는 함수
  // data, fileName, fileType에 값을 담아 downloadFile의 인수로 보낸다
  const onDownloadBtn = () => {
    const name = 'project_list'; //파일명
    downloadFile({
      data: JSON.stringify(data),
      fileName: `${name}.json`,
      fileType: 'text/json',
    });
  };

  //게시물 삭제
  const onRemove = id => {
    setInputData(inputData.filter(del => del.id !== id));
  };

  return (
    <Main>
      <Title titleText="Project list" />
      <TwoButton
        buttonTextFirst="Import"
        buttonTextSecond="Export"
        handleCheck={handleCheck}
        data={data}
        onDownloadBtn={onDownloadBtn}
      />
      {!upload && <EmptyData>Have no data</EmptyData>}
      {upload && (
        <Import
          className="import"
          data={data}
          handleAlert={handleAlert}
          inputData={inputData}
          onRemove={onRemove}
        />
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
