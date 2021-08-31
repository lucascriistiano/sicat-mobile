import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox, Input, Button } from 'react-native-elements';

import { RootStackParamList } from '../types';
// import { logUserIn } from '../navigation';

export const LoginScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'Login'>) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  
  const doLogin = () => {
    if (username === 'test' && password === 'test') {
      // logUserIn();
      console.log('OK');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SICAT</Text>
      
      <Input placeholder="E-mail" onChangeText={setUsername} />
      <Input placeholder="Senha" onChangeText={setPassword} secureTextEntry={true} />

      <CheckBox title="Lembrar senha" onPress={() => setChecked(!checked)} checked={checked} />

      <Button title="Entrar" style={{ width: 200 }} onPress={doLogin} />

      {/* <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    margin: 20,
  },
  // link: {
  //   marginTop: 15,
  //   paddingVertical: 15,
  // },
  // linkText: {
  //   fontSize: 14,
  //   color: '#2e78b7',
  // },
});
