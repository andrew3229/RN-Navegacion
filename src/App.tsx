import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import { Text, View, StyleSheet } from 'react-native'
import { StackNavigator } from './presentation/routes/StackNavigator';
import { DrawerNavigator } from './presentation/routes/DrawerNavigator';
import { BottomTabsNavigator } from './presentation/routes/BottomTabsNavigator';
export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <DrawerNavigator /> */}

      <BottomTabsNavigator />
    </NavigationContainer>
  )
}