import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors, globalStyles } from '../themes/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: globalColors.background
            }}
            screenOptions={{
                tabBarActiveTintColor: globalColors.primary,
                tabBarLabelStyle: {
                    marginBottom: 5
                },
                headerStyle: {
                    elevation: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent',
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0,
                }
            }}
        >
            <Tab.Screen options={{ title: 'Tab1', tabBarIcon: ({ color }) => (<IonIcon name="home-outline" size={30} color={color} />) }} name="Tab1" component={Tab1Screen} />
            <Tab.Screen options={{ title: 'Tab2', tabBarIcon: ({ color }) => (<IonIcon name="airplane-outline" size={30} color={color} />) }} name="Tab2" component={TopTabsNavigator} />
            <Tab.Screen options={{ title: 'Tab3', tabBarIcon: ({ color }) => (<IonIcon name="bar-chart-outline" size={30} color={color} />)}} name="Tab3" component={StackNavigator} />
        </Tab.Navigator>
    );
}