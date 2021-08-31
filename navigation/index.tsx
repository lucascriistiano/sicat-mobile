import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { ClientInfoScreen } from '../screens/ClientInfoScreen';

// import Realm from 'realm';

import { LoginScreen } from '../screens/LoginScreen';
import { NotFoundScreen } from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

// class User {
//   static schema = {
//     name: 'User',
//     primaryKey: 'email',
//     properties: {
//         name: 'string',
//         email: 'string',
//         // age: {type: 'int', default: 0},
//     },
//   };
// }

// const realm = new Realm({schema: [User]});

// const isSignedIn = async () => {
//   let loggedUser = realm.objects('User');
//   return loggedUser.length > 0;
// };

// export const logUserIn = async () => {
//   realm.write(() => {
//     const savedPerson = realm.create('User', {
//         name: 'Test User',
//         email: 'test@email.com',
//     });
//   });
// };

// export const logUserOut = async () => {
//   realm.write(() => {
//     realm.deleteModel('User');
//   });
// };

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="ClientInfoScreen" component={ClientInfoScreen} options={{ headerTitle: 'Detalhes do Cliente' }} />
      {/* {isSignedIn() ? (
        <>
          <Stack.Screen name="Root" component={BottomTabNavigator} />
          <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      )} */}
    </Stack.Navigator>
  );
}
