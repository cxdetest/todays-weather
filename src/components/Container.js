import React from 'react';
import styled from 'styled-components';

let MainContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const Container = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Container;
