import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(31, 29, 29);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: #fff;
  height: 60%;
  width: 50%;
`;

export const Header = styled.header`
  background-color: #013220;
  height: 15%;
`;

export const ChatBox = styled.div`
  border: 0.2vmax solid #000;
  height: 70%;
  overflow-y: auto;
`;

export const InputBox = styled.div`
  height: 15%;
  display: flex;
  border: 0.2vmax solid #000;
`;

export const ChatInput = styled.input`
  width: 80%;
  border: none;
  padding: 2vmax;
  background-color: #fff;
  outline: none;
  font-size: 1.2vmax;
`;

export const ChatSendButton = styled.button`
  background-color: #013220;
  color: #fff;
  border: none;
  width: 20%;
  transition: all 0.3s;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 2.6vmax;
  filter: brightness(100) invert();
  transition: all 0.3s;
`;
