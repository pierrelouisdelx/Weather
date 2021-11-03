import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AsyncStorage } from "react-native";

import LandingScreen from './screens/Landing';
import WeekScreen from './screens/Week';
import DayScreen from './screens/Day';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Week" component={WeekScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Day" component={DayScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
