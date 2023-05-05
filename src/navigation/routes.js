import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users, {routeName as usersRouteName} from '../containers/Users';
import UserDetails, {
  routeName as userDetailsRouteName,
} from '../containers/UserDetails';
import Follow, {routeName as followRouteName} from '../containers/Follow';
import FollowDetail, {
  routeName as followDetailRouteName,
} from '../containers/FollowDetail';

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={usersRouteName} component={Users} />
        <Stack.Screen name={userDetailsRouteName} component={UserDetails} />
        <Stack.Screen name={followRouteName} component={Follow} />
        <Stack.Screen name={followDetailRouteName} component={FollowDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
