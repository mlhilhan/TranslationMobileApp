import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components/native';
import I18n from '../languages/_i18n';
import SelectDropdown from 'react-native-select-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';

function TranslationPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [languages, setLanguages] = useState([]);
  const [textTranslateLanguage, setTextTranslateLanguage] = useState(null);
  const [resultLanguage, setResultLanguage] = useState(null);

  const CreateStorageMultiple = async () => {
    try {
      await AsyncStorage.setItem('input', input);
      console.log('Async Storage kaydı yapıldı: ' + input);
    } catch (e) {
      console.log('Async Storage kullanımında hata: ' + e);
    }
  };

  const buttonTranslate = () => {
    console.log('Butona basıldı ve buttonTranslate çalıştı.');
    CreateStorageMultiple();
    /*
    const params = new URLSearchParamas();
    params.append('q', input);
    params.append('source', textTranslateLanguage);
    params.append('target', resultLanguage);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    */
    axios
      .post(
        'https://libretranslate.com/translate',
        {
          q: input,
          source: textTranslateLanguage,
          target: resultLanguage,
          api_key: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        },
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then(res => {
        console.log('Apiye post edildi.');
        console.log('Çeviri Sonucu: ' + res.data);
        setOutput(res.data);
        outputList.push(output);
      })
      .catch(error => {
        console.log('Api post edilirken hata oluştu: ' + error);
      });
  };

  useEffect(() => {
    axios
      .get('https://libretranslate.com/languages', {
        headers: {
          accept: 'application/json',
        },
      })
      .then(res => {
        setLanguages(res.data);
      });
  });

  return (
    <Container>
      <Container2>
        <SelectDropdown
          data={languages.map(lang => lang.code)}
          defaultButtonText={I18n.t('choose_language')}
          onSelect={(selectedItem, value) => {
            console.log('Seçili Dil: ' + selectedItem, value);
            setTextTranslateLanguage(selectedItem);
          }}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem;
          }}
          rowTextForSelection={item => {
            return item;
          }}
        />
        <Text>{I18n.t('to')}</Text>
        <SelectDropdown
          data={languages.map(lang => lang.code)}
          defaultButtonText={I18n.t('choose_language')}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setResultLanguage(selectedItem);
          }}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem;
          }}
          rowTextForSelection={item => {
            return item;
          }}
        />
      </Container2>
      <Input
        multiline={true}
        numberOfLines={5}
        value={input}
        onChangeText={input => setInput(input)}
      />
      <Container2>
        <Button>
          <TextinButton>{I18n.t('microphone')}</TextinButton>
        </Button>
        <Button onPress={buttonTranslate}>
          <TextinButton>{I18n.t('translate')}</TextinButton>
        </Button>
      </Container2>
      <Input
        multiline={true}
        numberOfLines={5}
        editable={false}
        value={output}
      />
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
`;

const Container2 = styled.View`
  align-items: center;
  flex-direction: row;
`;

const Text = styled.Text`
  font-size: 18px;
`;

const Input = styled.TextInput`
  margin: 12px;
  padding: 10px;
  border-width: 1px;
  height: 150px;
  width: 300px;
`;

const Button = styled.TouchableOpacity`
  height: 50px;
  width: 100px;
  background-color: gray;
  align-items: center;
  justify-content: center;
`;

const TextinButton = styled.Text`
  font-size: 16px;
`;

export default TranslationPage;
