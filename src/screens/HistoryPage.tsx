import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

function HistoryPage() {
  return (
    <Container>
      <Text>History Page</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default HistoryPage;
