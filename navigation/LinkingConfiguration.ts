import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabClientList: {
            screens: {
              TabClientListScreen: 'one',
              TabClientInfoScreen: 'two',
            },
          },
          TabReport: {
            screens: {
              TabReportScreen: 'two',
            },
          },
          TabMyInfo: {
            screens: {
              TabMyInfoScreen: 'three',
            },
          },
        },
      },
      Login: '*',
      NotFound: '*',
    },
  },
};
