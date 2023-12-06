import styled from "styled-components";

function App() {
  return (
    <Body>
      <BigHeader>
        <div>차례</div>
        <Fi href="./">___ __ ___ / ____</Fi>
        <Hr />
        <MidConteiner>
          <SmlHed>
            <A href="./">____</A>
            <A href="./">___</A>
            <A href="./">____</A>
            <A href="./">____ / ____</A>
            <A href="./">__(___ / ____ / __)</A>
          </SmlHed>
          <SmlHed>
            <A href="./">____</A>
            <A href="./">__</A>
            <A href="./">__ __</A>
            <A href="./">___ / ______</A>
            <A href="./">___ ___</A>
          </SmlHed>
        </MidConteiner>
        <Hr />
        <Fi href="./">___</Fi>
      </BigHeader>
      <PhoneContainer>
        <LeftPhoneContainer>
          <SmlButn></SmlButn>
          <SmlButn></SmlButn>
          <SmlButn2></SmlButn2>
        </LeftPhoneContainer>

        <Phone>
          {/* 안내서 페이지 ifrem해서 볼수 있게
        <div>폰모양으로 만들고 싶음 아님 그냥 이미지를 넣을까 싶기도하곤</div> 
        폰만든거는 컴포넌트로 따로 만들어서 넣을까 싶기도 하다*/}
          <BackWhite>
            <TopBar>
              <Cl></Cl>
              <Cl></Cl>
            </TopBar>
          </BackWhite>
        </Phone>
        <RightPhoneContainer>
          <SmlButn3></SmlButn3>
        </RightPhoneContainer>
      </PhoneContainer>
    </Body>
  );
}

export default App;

const Body = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const BigHeader = styled.div`
  width: 37vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px 0;

  border-radius: 0 10px 10px 0;

  box-shadow: 5px 0 3px whitesmoke;
`;

const MidConteiner = styled.div`
  /* background-color: aliceblue; */

  width: 80%;
  height: 40%;

  display: flex;
  justify-content: space-evenly;
`;

const SmlHed = styled.div`
  /* background-color: thistle; */

  width: 30%;

  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PhoneContainer = styled.div`
  /* background-color: whitesmoke; */

  width: 60vw;

  display: flex;
  justify-content: center;
`;

const LeftPhoneContainer = styled.div`
  height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 40px;
`;

const SmlButn = styled.div`
  background-color: black;

  height: 50px;
  width: 5px;

  border-radius: 5px 0 0 5px;
`;

const SmlButn2 = styled.div`
  background-color: black;

  height: 40px;
  width: 5px;

  margin-top: 50px;

  border-radius: 5px 0 0 5px;
`;

const Phone = styled.div`
  background-color: black;

  width: 30vw;
  height: 75vh;

  /* border: 2px solid; */
  border-radius: 65px 65px 0 0;

  box-shadow: 20px 20px 2px whitesmoke;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  text-align: center;

  background-image: linear-gradient(225deg, black, rgb(90, 90, 90));
`;

const BackWhite = styled.div`
  background-color: white;

  width: 93%;
  height: 97.3%;

  border-radius: 60px 60px 0 0;

  display: flex;
  justify-content: center;
`;

const TopBar = styled.div`
  background-color: rgb(20, 20, 20);

  width: 40%;
  height: 20px;

  border-radius: 2px 2px 10px 10px;

  display: flex;
  justify-content: space-around;
  gap: 50%;
`;

const Cl = styled.div`
  background-color: rgb(77, 77, 77);

  border-radius: 50%;

  width: 13px;
  height: 13px;
`;

const RightPhoneContainer = styled.div`
  height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 40px;
`;

const SmlButn3 = styled.div`
  background-color: black;

  height: 50px;
  width: 5px;

  border-radius: 0 5px 5px 0;
`;

const Fi = styled.div`
  font-size: 20px;

  cursor: pointer;
`;

const A = styled.div`
  font-size: 15px;

  cursor: pointer;
`;

const Hr = styled.hr`
  color: black;

  width: 150px;

  border: 0.5 solid black;
`;
