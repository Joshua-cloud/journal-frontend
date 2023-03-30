import { View } from 'react-native'
import { Provider as PaperProvider, TextInput, Button } from 'react-native-paper'
import React from 'react'
import { StyledContainer, OuterContainer, PageLogo } from '../style/styles'
import KeyboardAvoidingWrapper from '../style/KeyboardAvoidingWrapper'
import axios from 'axios'
import MainContainer from '../style/MainContainer'




const Login = ({navigation}) => {
    return (
      <MainContainer>
        <KeyboardAvoidingWrapper>
        <PaperProvider>
            <StyledContainer>
           
              <OuterContainer>
                    <PageLogo resizeMode="cover" 
                    source={require('./../assets/Images/Book_reading_re_fu2c-removebg-preview.png')} />
                </OuterContainer>
                <View>
                <TextInput label= "Email" 
                mode='outlined' 
                style={{marginTop: 30}} /></View>
               <OuterContainer> 
            <Button style={{
              borderRadius: 15,
              width: 180,
              marginTop: 30,
              paddingVertical: 7,
              backgroundColor: '#ffffff',
              borderColor: '#000000',
              borderWidth: 1,
          }}
          labelStyle={{
            color: 'black',
            fontSize: 15,
          }}
          onPress={() => {
            navigation.navigate("Code");
          }}
          >Enter code</Button>
         
          </OuterContainer>
    
            </StyledContainer>
        </PaperProvider>
        </KeyboardAvoidingWrapper>
        </MainContainer>
      )
    }
    



export default Login;