import logo from '../../images/logo.png';
import {
  Container,
  Wrapper,
  Image,
  Title,
  LoginInput,
  LoginButton,
} from './Join.styled';
import { Link } from 'react-router-dom';

const Join = ({ name, setName }) => {
  const sendUser = () => {
    return name;
  };

  return (
    <Container>
      <Wrapper>
        <Image src={logo}></Image>
        <Title> C HAT</Title>
        <LoginInput
          id="joinInput"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <Link
          to="chat"
          onClick={(event) => (!name ? event.preventDefault() : null)}
        >
          <LoginButton onClick={sendUser}>Login</LoginButton>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Join;
