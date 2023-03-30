import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from "@react-navigation/stack";
import Landing from './../component/Landing';
import Login from './../component/Login';
import SignIn from './../component/SignIn';
import { Colors } from './../style/styles';
import Code from "../component/Code";
import Home from "../component/Home";
import FlexDirectionBasics from "../component/FlexDirectionBasics";


const {primary, tertiary} = Colors;


const Stack = createStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerStyled: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
                }}
                initialRouteName= "Landing"
            >
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Code" component={Code} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;