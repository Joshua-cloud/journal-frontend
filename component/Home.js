import { View, Text, Settings } from 'react-native'
import * as React from 'react'
import KeyboardAvoidingWrapper from '../style/KeyboardAvoidingWrapper';
import { OuterContainer, StyledContainer, HeadContainer, TextContainer } from '../style/styles';
import { Provider as PaperProvider, IconButton } from 'react-native-paper'
import MainContainer from '../style/MainContainer';

const Home = () => {
  return (
    <MainContainer>
    <KeyboardAvoidingWrapper>
        <PaperProvider>
            <StyledContainer>
                <TextContainer>
                
                </TextContainer>
                <OuterContainer>
                    <HeadContainer>
                <View>
                    <Text> Welcome John Smith!</Text>
                </View>
                <View>
                    <IconButton icon={('')} >
            </IconButton>
                </View>
                </HeadContainer>
                
                </OuterContainer>
            </StyledContainer>
        </PaperProvider>
    </KeyboardAvoidingWrapper>
    </MainContainer>
  )
}

export default Home;