import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

function TranslationPage() {
  return (
    <Container>
      <Text>Translation Page</Text>
    </Container>
  );
}

const Container = styled.View`
  background-color: red;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default TranslationPage;
