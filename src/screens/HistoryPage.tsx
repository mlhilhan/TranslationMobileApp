import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text} from 'react-native';

function HistoryPage() {
  const [inp, setInp] = useState('');
  const [out, setOut] = useState('');

  const getData = async () => {
    console.log('getData metodu içine girdi.');
    try {
      const valueInp = await AsyncStorage.getItem('input');
      const valueOut = await AsyncStorage.getItem('output');
      console.log('input çekildi.' + valueInp);
      console.log('output çekildi.' + valueOut);
      setInp(valueInp);
      setOut(valueOut);
    } catch (e) {
      console.log('catch içine girdi.');
      console.log('AsyncStroge get data esnasında hata: ' + e);
    }
  };

  useEffect(() => {
    getData();
  }, [inp]);

  return (
    <Container>
      <Text>Çevirmek İstediğiniz Kelime:</Text>
      <Text>{inp}</Text>
      <Text>----------------------------</Text>
      <Text>Çeviri Sonucu:</Text>
      <Text>{out}</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default HistoryPage;
