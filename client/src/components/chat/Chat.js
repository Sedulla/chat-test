import { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';
import {
  Container,
  Header,
  Wrapper,
  ChatBox,
  InputBox,
  ChatInput,
  ChatSendButton,
  Image,
} from '../chat/Chat.styled';
import sendLogo from '../../images/send.png';
import Message from '../message/Message';

let socket;

const ENDPOINT = 'http://localhost:4500/';

const Chat = ({ name }) => {
  const [id, setId] = useState('');
  const [messages, setMessages] = useState([]);

  const send = () => {
    const message = document.getElementById('chatInput').value;
    socket.emit('message', { message, id });
    document.getElementById('chatInput').value = '';
  };

  useEffect(() => {
    socket = socketIO(ENDPOINT, { transports: ['websocket'] });

    socket.on('connect', () => {
      alert('connected');
      setId(socket.id);
    });

    console.log(socket);
    socket.emit('joined', { name });

    socket.on('welcome', (data) => {
      console.log(data.user, data.message);
    });

    socket.on('userJoined', (data) => {
      console.log(data.user, data.message);
    });

    socket.on('leave', (data) => {
      console.log(data.user, data.message);
    });

    return () => {
      socket.emit('userDisconnect');
      socket.off();
      console.log('disconnected1');
    };
  }, [name]);

  useEffect(() => {
    socket.on('sendMessage', (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message, data.id);
    });
    return () => {
      console.log('disconnected2');
    };
  }, [messages]);

  return (
    <Container>
      <Wrapper>
        <Header></Header>
        <ChatBox>
          {messages.map((item, i) => (
            <Message
              user={item.id === id ? '' : item.user}
              message={item.message}
              classs={item.id === id ? 'right' : 'left'}
            />
          ))}
        </ChatBox>
        <InputBox>
          <ChatInput id="chatInput" type="text"></ChatInput>
          <ChatSendButton onClick={send}>
            <Image src={sendLogo}></Image>
          </ChatSendButton>
        </InputBox>
      </Wrapper>
    </Container>
  );
};

export default Chat;
