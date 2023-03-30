import { View, Text, axios } from 'react-native'
import React, { useState } from 'react'
import { Provider as PaperProvider, TextInput, Button } from 'react-native-paper'
import { StyledContainer, PageLogo, OuterContainer } from '../style/styles'
import KeyboardAvoidingWrapper from '../style/KeyboardAvoidingWrapper'
import MainContainer from '../style/MainContainer'


const SignIn = ({navigation}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/SignIn', {
        name,
        email,
      });

      const token = response.data.token;
      // Save the token to AsyncStorage or another storage solution
      // ...

      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <MainContainer>
    <KeyboardAvoidingWrapper>
    <PaperProvider>
        <StyledContainer>
       
          <OuterContainer>
                <PageLogo resizeMode="cover" 
                source={require('./../assets/Images/friends_r511-removebg-preview.png')} />
            </OuterContainer>
            <View>
            <TextInput label= "Name" 
            mode='outlined' 
            style={{marginTop: 30}}
            value={name}
            onChangeText={setName}
            /></View>
            <View>
            <TextInput label= "Email" 
            mode='outlined' 
            style={{marginTop: 30}}
            value={email}
            onChangeText={setEmail}
            /></View>
           <OuterContainer> 
        <Button style={{
          borderRadius: 15,
          width: 100,
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
      onPress={handleRegister}
      >Sign Up</Button>
      </OuterContainer>

        </StyledContainer>
        
    </PaperProvider>
    </KeyboardAvoidingWrapper>
    </MainContainer>

  )
}



export default SignIn;