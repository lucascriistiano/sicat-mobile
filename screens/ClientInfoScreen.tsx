import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Badge } from 'react-native-elements';

import { TabOneParamList } from '../types';

export const ClientInfoScreen = ({ navigation }: StackScreenProps<TabOneParamList, 'TabClientInfoScreen'>) => {

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Badge containerStyle={styles.nameBadge} status="primary" value="      " />
        <Text style={styles.nameText}>Lucas Cristiano</Text>
      </View>
      
      {/* Divider */}

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Localização: 01</Text>
        <Text style={styles.infoText}>Hidrômetro: 12345</Text>
        <Text style={styles.infoText}>Leitura Anterior: 240m3</Text>
        <Text style={styles.infoText}>Data da Leitura: 21/05/2020</Text>
      </View>

      <Button title="Medir Leitura" style={{ width: 200 }} onPress={() => {}} />
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
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  nameContainer: {
    padding: 10,
    height: 60,
    borderRadius: 5,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
  },
  nameBadge: {
    width: 50,
  },
  nameText: {
    flex: 3,
    fontSize: 18,
  },
  infoContainer: {
    // padding: 10,
    // height: 60,
    borderRadius: 5,
    backgroundColor: 'white',
    // display: 'flex',
    // alignItems: 'center',
    // flexDirection: 'row',
    margin: 5,
  },
  infoText: {
    // flex: 3,
    fontSize: 18,
  },
});
