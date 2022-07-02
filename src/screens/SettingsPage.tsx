import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

function SettingsPage() {
  return (
    <Container>
      <Text>Settings Page</Text>
    </Container>
  );
}

const Container = styled.View`
  background-color: yellow;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default SettingsPage;
