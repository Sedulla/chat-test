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
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 10vmax;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2.5vmax;
  width: 25vmax;
  border-bottom: 0.2vmax solid #fff;
  text-align: center;
  padding: 1vmax;
`;

export const LoginInput = styled.input`
  width: 25vmax;
  padding: 1.5vmax;
  border: none;
  outline: none;
  font-size: 1.2vmax;
  margin: 2vmax;
`;

export const LoginButton = styled.button`
  width: 25vmax;
  padding: 1.5vmax;
  border: none;
  color: #fff;
  outline: none;
  font-size: 1.2vmax;
  background-color: #013220;
  transition: all 0.3s;
  cursor: pointer;
`;
