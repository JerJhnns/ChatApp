import React, { useEffect } from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Contact from "../Navi/Contacts";
import Chat from "../Navi/Chat";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        
        <Stack.Navigator screenOptions={{headerShown: false}}>      
            <Stack.Screen name="Contacts" component={Contact}/>
            <Stack.Screen name="Chat" component={Chat}/>
        </Stack.Navigator>

    )}

export default AuthStack;