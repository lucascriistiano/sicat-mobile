import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Avatar, Badge, Icon, withBadge, SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { IClient, listClients } from '../services/ClientService';
import { RootStackParamList, TabOneParamList } from '../types';

const listItemStyles = StyleSheet.create({
  container: {
    padding: 10,
    height: 60,
    borderRadius: 5,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
  },
  badge: {
    width: 50,
  },
  text: {
    flex: 3,
    fontSize: 18,
  }
});

interface IClientItem extends IClient {
  key: number;
}

interface IProps {
  name: string;
  isActive: boolean;
  onPress: () => void;
}

const ClientListItem: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <TouchableOpacity style={listItemStyles.container} onPress={props.onPress}>
      <Badge containerStyle={listItemStyles.badge} status={props.isActive ? 'primary' : 'error'} value="      " />
      <Text style={listItemStyles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
}

export const TabClientListScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'ClientInfoScreen'>) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [clients, setClients] = useState<IClientItem[]>([]);
  const [filteredClients, setFilteredClients] = useState<IClientItem[]>([]);
  
  const updateSearchTerm = (searchTerm: string) => {
    const lowerSearchTerm = searchTerm.trim().toLowerCase();
    if (lowerSearchTerm !== '') {
      setFilteredClients(
        clients.filter(client => client.name.toLowerCase().indexOf(lowerSearchTerm) !== -1));
    } else {
      setFilteredClients(clients);
    }
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    listClients()
      .then(clients => clients.map((client) => { 
        return {
          key: client.location,
          ...client,
        }
      }))
      .then(clientsWithKey => {
        setClients(clientsWithKey);
        setFilteredClients(clientsWithKey);
      });
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      <SearchBar
        placeholder="Buscar clientes..."
        onChangeText={updateSearchTerm}
        value={searchTerm}
        containerStyle={{backgroundColor: '#EDEDED'}}
        inputContainerStyle={{backgroundColor: '#FEFEFE'}}
        lightTheme={true}
      />
      <FlatList
        data={filteredClients}
        renderItem={({item}) => (
          <ClientListItem
            name={item.name}
            isActive={item.active}
            onPress={() => navigation.navigate('ClientInfoScreen')}
          />
        )}
        keyExtractor={(item, index) => item.key.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
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
