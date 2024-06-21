import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/Settings';
import LottieAnim from '../screens/Lottie';
import HomeScreenMain from '../screens/HomeScreenMain';
import HomeScreenClassComp from '../screens/HomeScreenClassComp';
import AdvancedComp from '../screens/AdvancedComp';
import ForwardRef from '../screens/ForwardRef';
import Hooks from '../screens/Hooks';

function RootStack(): JSX.Element {
    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator>
        {/* <Stack.Screen name="Hooks" component={Hooks} />
        <Stack.Screen name="ForwardRef" component={ForwardRef} /> */}
        <Stack.Screen name="AdvancedComp" component={AdvancedComp} />
        <Stack.Screen name="HomeScreenClassComp" component={HomeScreenClassComp} />
         <Stack.Screen name="HomeScreenMain" component={HomeScreenMain} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Lottie" component={LottieAnim} />
      </Stack.Navigator>
    );
  }
  
function MyDrawer(): JSX.Element {
    const Drawer = createDrawerNavigator();

    return (
    <Drawer.Navigator>
      <Drawer.Screen name="Hooks" component={Hooks} />
      <Drawer.Screen name="ForwardRef" component={ForwardRef} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator(): JSX.Element {
    return (
      <NavigationContainer>
        <RootStack />
        {/* <MyDrawer /> */}
      </NavigationContainer>
    );
  }