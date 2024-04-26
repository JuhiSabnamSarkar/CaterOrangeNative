import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';



const Stack = createStackNavigator();
const ExtraNavigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ExtraNavigation