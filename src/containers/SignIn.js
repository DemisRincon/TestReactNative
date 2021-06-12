import {Button, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import {useInput} from '../library/hooks';

const SignIn = () => {
  const [porpsUserName] = useInput('name');
  const [porpsPassword] = useInput('pass');
  const [porpsEmail] = useInput('email');
  const [isLogin, setIsLogin] = useState(false);
  return (
    <View>
      <Text>{isLogin ? 'LOGIN' : 'Sign In'}</Text>
      <TextInput {...porpsUserName} />
      {!isLogin && <TextInput {...porpsEmail} />}
      <TextInput {...porpsPassword} />
      <Button
        onPress={() => setIsLogin(!isLogin)}
        title={isLogin ? 'change to SIGNIN ' : 'CHANGE TO LOGIN'}>
        {isLogin ? 'change to SIGN IN ' : 'CHANGE TO LOGIN'}
      </Button>
    </View>
  );
};

export default SignIn;
