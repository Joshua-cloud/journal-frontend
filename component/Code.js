import { View, Text } from 'react-native'
import { Provider as PaperProvider, TextInput, Button } from 'react-native-paper'
import React from 'react'
import { StyledContainer, OuterContainer, PageLogo } from '../style/styles'
import KeyboardAvoidingWrapper from '../style/KeyboardAvoidingWrapper'
import MainContainer from '../style/MainContainer'


const Code = ({ navigation }) => {
    return (
      <MainContainer>
        <KeyboardAvoidingWrapper>
        <PaperProvider>
            <StyledContainer>
              <OuterContainer>
                    <PageLogo resizeMode="cover" 
                    source={require('./../assets/Images/Personal_notebook_re_d7dc-removebg-preview.png')} />
                </OuterContainer>
                <View>
                <TextInput label= "Enter code here" 
                mode='outlined' 
                style={{marginTop: 30}} /></View>
              <OuterContainer> 
            <Button style={{
              borderRadius: 10,
              width: 80,
              marginTop: 30,
              paddingVertical: 5,
              backgroundColor: '#ffffff',
              borderColor: '#000000',
              borderWidth: 1,
          }}
          labelStyle={{
            color: 'black',
            fontSize: 15,
          }}
          onPress={() => {
            navigation.navigate("Home");
          }}
          >Login</Button>
          <Text style={{marginTop: 10, fontSize: 15}}>Resend code</Text>
          </OuterContainer>
            </StyledContainer>
        </PaperProvider>
        </KeyboardAvoidingWrapper>
        </MainContainer>
      )
    }


export default Code;