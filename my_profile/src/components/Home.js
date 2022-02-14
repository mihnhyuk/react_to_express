//import profile from '../img/profile.jpg';
import instagram from '../img/instagram.png'
import styled from "styled-components"

const Profileimg = styled.img`
  width: 250px;
  border-color: #000000;
  border-width: 2px;
  border-style: solid;
`
const Profileinfo = styled.ul`
  width: 200px;
  list-style: none;
  margin-left: 30px;
  background-color: #AAAAAA;
`
const Profile = styled.div`
  display: flex;
  justify-content: space-evenly;
  left: 30%;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TopBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #333333;
  margin-top: 20px;
  margin-bottom: 20px;
  border-color: #FF0000;
  border-width: 4px;
  border-style: solid;
`
const ButtonList =styled.li`
  background-color: #EEEEEE;
  width: 100%;
  margin: 10px;
  text-align: center;
`
const Delimeter = styled.div`
  margin-top: 30px;
  border-color: #000000;
  border-width: 2px;
  border-style: solid;
  width: 80%;
`
const SNSlink = styled.img`
  width: 20px;
`


function Home() {
  return (
    <Body className="App">
      <Profile className="Profile">
        <Profileimg src="" className="Profile-picture" alt="profile"/>
        <Profileinfo >
          <li>장민혁</li>
          <li>중앙대학교</li>
          <SNSlink src={instagram} className="insta-icon" alt="insta"/>
        </Profileinfo>
      </Profile>
      <Delimeter></Delimeter>
    </Body>
  );
}


export default Home;
