import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { useState } from 'react';
import { Alert, ActivityIndicator, Button, StyleSheet, Modal } from 'react-native';

import { Text, View } from '../components/Themed';
import { generateReport } from '../services/ReportService';
import { RootStackParamList } from '../types';

const CustomProgressBar: React.FunctionComponent<{visible: boolean}> = ({ visible }) => (
  <Modal onRequestClose={() => null} visible={visible}>
    <View style={{ flex: 1, backgroundColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
        <Text style={{ fontSize: 20, fontWeight: '200' }}>Gerando relatório</Text>
        <ActivityIndicator size="large" />
      </View>
    </View>
  </Modal>
);

export const TabReportScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'Root'>) => {

  const [isLoading, setIsLoading] = useState(false);

  const generateReportAction = () => {
    setIsLoading(true);
    generateReport()
      .then(response => {
        setIsLoading(false);
        Alert.alert('Relatório enviado por e-mail');
      });
  }

  return (
    isLoading ?
      <CustomProgressBar visible={true} /> : 
      <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Enviar Relatório por E-mail" onPress={generateReportAction} />
        <Button title="Go To Login" onPress={() => navigation.replace('Login')} />
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
