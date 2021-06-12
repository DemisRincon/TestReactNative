import {Button, Text, TextInput, View} from 'react-native';

import React from 'react';
import {useInput} from '../library/hooks';

const Login = ({setIsLogin}) => {
  const [porpsUserName] = useInput('name');
  const [porpsPassword] = useInput('pass');

  return (
    <View>
      <Text>LOGIN</Text>
      <TextInput {...porpsUserName} />
      <TextInput {...porpsPassword} />
      <Button onPress={() => setIsLogin(false)} title="LOGIN">
        change to sign in
      </Button>
    </View>
  );
};

export default Login;
