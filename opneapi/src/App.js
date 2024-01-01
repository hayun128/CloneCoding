import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";

function App() {
  const [upload, setUpload] = useState();
  console.log(upload);

  const [sourceLanguges, setSourceLanguges] = useState("ko");
  const [targetLanguges, setTargetLanguges] = useState("en");

  const sLSelect = (e) => {
    setSourceLanguges(e.target.value);
  };

  const tLSelect = (e) => {
    setTargetLanguges(e.target.value);
  };
  console.log(targetLanguges);

  const translate = async () => {
    try {
      const result = await axios.post(
        "https://openapi.naver.com/v1/papago/n2mt",
        {
          params: {
            soure: "ko",
            target: "en",
            text: upload,
          },
          headers: {
            Accept: "*/*",
            "X-Naver-Client-Id": "EP_CRcoF6vB_CIB4Fr0v",
            "X-Naver-Client-Secret": "_DrKdl5pL9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Body>
      <select
        name="sourceLanguges"
        id=""
        onChange={sLSelect}
        value={sourceLanguges}
      >
        <option value="ko">한국어</option>
        <option value="en">영어</option>
        <option value="es">스페인어</option>
        <option value="ja">일본어</option>
      </select>

      <Con>
        <Input value={upload} onChange={(e) => setUpload(e.target.value)} />
        <But onClick={translate}>»</But>
        <Input />
      </Con>

      <select
        name="targetLanguges"
        id=""
        onChange={tLSelect}
        value={targetLanguges}
      >
        <option value="ko">한국어</option>
        <option value="en">영어</option>
        <option value="es">스페인어</option>
        <option value="ja">일본어</option>
      </select>
    </Body>
  );
}

export default App;

const Body = styled.div`
  height: 100vh;
  display: flex;

  padding: 20px 0;

  flex-direction: column;

  gap: 5vh;
`;

const Con = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 15px;
`;

const Aro = styled.div`
  margin: 2vh 0;
  font-size: 30px;
`;

const Input = styled.input`
  width: 30vw;
  height: 10vh;

  padding: 0 20px;

  border: 1px solid grey;
  border-radius: 5px;
`;

const But = styled.button`
  font-size: 30px;

  margin: 0 5vh;

  border: none;
  background-color: white;

  &:hover {
    color: rgb(78, 29, 255);
  }
`;
