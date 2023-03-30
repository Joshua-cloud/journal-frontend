import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Landing from './component/Landing';
import Login from './component/Login';
import SignIn from './component/SignIn';
import RootStack from './navigators/RootStack';
import MainContainer from './style/MainContainer';

export default function App() {
  return (
    <MainContainer>
    <RootStack />
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

