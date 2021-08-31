import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { useState } from 'react';
import { Alert, ActivityIndicator, Button, StyleSheet, Modal } from 'react-native';
// import { logUserOut } from '../navigation';

import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';

export const TabMyInfoScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'Root'>) => {

  const [isLoading, setIsLoading] = useState(false);

  // const doLogout = () => logUserOut();
  const doLogout = () => {};

  return (
      <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Sair" onPress={doLogout} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
