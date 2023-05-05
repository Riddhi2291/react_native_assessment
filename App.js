import React from 'react';
import {View, LogBox, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/reduxStore';
import AppRoutes from './src/navigation/routes';
import globalStyles from './src/styles';
import {initiateEmptyStore} from './src/models';

initiateEmptyStore();

if(__DEV__) {
  import('./src/helper/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

LogBox.ignoreAllLogs();
const App = () => {

  return (
    <Provider store={store}>
      <View style={globalStyles.flex}>
        <StatusBar barStyle="dark-content" />
        <AppRoutes enableURLHandling={false} />
      </View>
    </Provider>
  );
};

export default App;
