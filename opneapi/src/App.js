import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";

function App() {
  const [upload, setUpload] = useState();
  const [tarns, setTarns] = useState();

  console.log(upload);

  const [sourceLanguges, setSourceLanguges] = useState("ko");
  const [targetLanguges, setTargetLanguges] = useState("en");

  const URL = process.env.REACT_APP_BASEURL;
  console.log(URL);

  const sLSelect = (e) => {
    setSourceLanguges(e.target.value);
  };
  const tLSelect = (e) => {
    setTargetLanguges(e.target.value);
  };
  console.log(targetLanguges);

  const translate = async () => {
    try {
      const result = await axios.get(`${URL}/translate`, {
        params: {
          text: upload,
        },
      });
      console.log(result);
      setTarns(result.data.message.result.translatedText);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Body>
      <Content>
        <Con>
          <Selc>
            <Select
              name="sourceLanguges"
              id=""
              onChange={sLSelect}
              value={sourceLanguges}
            >
              <option value="ko">한국어</option>
              <option value="en">영어</option>
              <option value="es">스페인어</option>
              <option value="ja">일본어</option>
            </Select>

            <But onClick={translate}>»</But>

            <Select
              name="targetLanguges"
              id=""
              onChange={tLSelect}
              value={targetLanguges}
            >
              <option value="ko">한국어</option>
              <option value="en">영어</option>
              <option value="es">스페인어</option>
              <option value="ja">일본어</option>
            </Select>
          </Selc>
          <Input
            value={upload}
            onChange={(e) => setUpload(e.target.value)}
            placeholder="번역할 거"
          />
        </Con>

        <Con>
          <Input className="tarInput" placeholder="번역된 거" value={tarns} />
        </Con>
      </Content>
    </Body>
  );
}

export default App;

const Body = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px 0;

  /* gap: 5vh; */
`;

const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const Selc = styled.div`
  width: 100%;

  padding: 5px 0 5px 0;

  display: flex;
  justify-content: center;
  gap: 5vw;
`;

const Select = styled.select`
  width: 20%;

  font-family: "omyu_pretty";
  font-size: 2rem;

  border: none;

  &:focus {
    outline: 1px dashed lightgrey;
  }
`;

const Con = styled.div`
  width: 100%;
  height: 35vh;

  border: 1px solid lightgrey;

  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 100%;
  padding: 3px 20px;

  font-size: 5vmin;
  font-family: "omyu_pretty";

  border-style: solid;
  border-width: 1px 0 0 0;
  border-color: lightgrey;
  border-radius: 5px 5px 0 0;

  &.tarInput {
    background-color: whitesmoke;
    border: none;
    &:focus {
      border-radius: 0;
    }
  }

  &::placeholder {
    color: lightgrey;
  }

  &:focus {
    outline: 1px solid grey;
  }
`;

const But = styled.button`
  background-color: green;

  font-size: 30px;

  border: none;
  background-color: white;

  &:hover {
    color: rgb(78, 29, 255);
  }
`;
