import React, {useState} from 'react';
import styled from 'styled-components/native';
import I18n from '../languages/_i18n';
import SelectDropdown from 'react-native-select-dropdown';

function TranslationPage() {
  const [textToTranslate, setTextToTranslate] = useState('');
  const [result, setResult] = useState('');
  const languages = ['Turkish', 'English'];
  const [textTranslateLanguage, setTextTranslateLanguage] = useState(null);
  const [resultLanguage, setResultLanguage] = useState(null);

  return (
    <Container>
      <Container2>
        <SelectDropdown
          data={languages}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setTextTranslateLanguage(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
        <Text>to</Text>
        <SelectDropdown
          data={languages}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setResultLanguage(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </Container2>
      <Input
        multiline={true}
        numberOfLines={5}
        value={textToTranslate}
        onChangeText={textToTranslate => setTextToTranslate(textToTranslate)}
      />
      <Button>
        <TextinButton>{I18n.t('translate')}</TextinButton>
      </Button>
      <Input
        multiline={true}
        numberOfLines={5}
        editable={false}
        value={textToTranslate}
        onChangeText={textToTranslate => setTextToTranslate(textToTranslate)}
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
  font-size: 17px;
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
  font-weights: bold;
`;

export default TranslationPage;
