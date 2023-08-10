import {Stack} from '@react-native-material/core';
import {useRoute} from '@react-navigation/native';

import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Button, TextInput} from 'react-native-paper';
import Register from './Register';

export default function Login({navigation}: any) {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRoute();

  const handleLogin = () => {
    if (userName === '123' && password === '123') {
      navigation.navigate('Register');
    }
  };

  return (
    <Stack spacing={10} style={style.container}>
      <TextInput
        mode="outlined"
        value={userName}
        onChangeText={setUserName}
        label="User Name"
        left={<TextInput.Icon icon="eye" />}
      />
      <TextInput
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        spellCheck
      />
      <Button icon="camera" mode="contained" onPress={handleLogin}>
        Login
      </Button>
    </Stack>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#707070',
    width: '100%',
    height: '100%',
  },
});
