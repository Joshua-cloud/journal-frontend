import { View, Text, StyleSheet, Animated } from 'react-native'
import { Button, Provider as PaperProvider } from 'react-native-paper'
import React, { useRef, useState } from 'react'
import { StyledContainer, InnerContainer, PageLogo, PageTitle } from '../style/styles'
import MainContainer from '../style/MainContainer'
import Slides from '../style/Slides';
import { FlatList } from 'react-native-gesture-handler'
import OnboardingItem from './OnboardingItem'
import { StatusBar } from 'expo-status-bar'


const Landing = ({navigation}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({ viewableItems}) => {
      setCurrentIndex(viewableItems[0].index);
    }).current


    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  return (
    <MainContainer>
    <PaperProvider>
    <StyledContainer>
      <InnerContainer>
      <View style={{ flex:1 }}>
        <FlatList 
        data={Slides} 
        renderItem={({ item }) => <OnboardingItem item={item} />} 
        horizontal 
        showsHorizontalScrollIndicator 
        pagingEnabled bounces={true} 
        keyExtractor={(item) => item.id} 
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX}}}], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={30}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        //ref={SlidesRef}
        />
        
        </View>
        </InnerContainer>
        
        <View style={styles.button}>
                <Button 
                style={{
                    borderRadius: 15,
                    width: 100,
                    paddingVertical: 5,
                    backgroundColor: '#ffffff',
                    borderColor: '#000000',
                    borderWidth: 1,
                }}
                labelStyle={{
                  color: 'black',
                  fontSize: 15,
                }} onPress={() => {
                  navigation.navigate("SignIn");
                }}
                >Sign up</Button>
                <Button 
                style={{
                    borderRadius: 15,
                    width: 100,
                    paddingVertical: 5,
                    backgroundColor: '#ffffff',
                    borderColor: '#000000',
                    borderWidth: 1,
                    marginLeft: 40
                }}
                labelStyle={{
                  color: 'black',
                  fontSize: 15,
                }}
                onPress={() => {
                  navigation.navigate("Login");
                }}
                >Login</Button>
                </View>
        
        
    </StyledContainer>
    </PaperProvider>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        textAlign: 'center',
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
        marginLeft: 50,
        marginBottom: 100
    }
});

export default Landing;





/*<PageLogo resizeMode="cover" source={require('./../assets/Images/Exams_re_4ios-removebg-preview.png')} />
            <PageTitle>My Journal</PageTitle>
            <Text>My Journal helps you record and reflect on your daily{"\n"} 
                thoughts, experiences and emotions. it provides a safe and secure space for personal 
                growth and development.</Text>
            <View style={styles.button}>
                <Button 
                style={{
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
                }} onPress={() => {
                  navigation.navigate("SignIn");
                }}
                >Sign up</Button>
                <Button 
                style={{
                    borderRadius: 15,
                    width: 100,
                    marginTop: 30,
                    paddingVertical: 7,
                    backgroundColor: '#ffffff',
                    borderColor: '#000000',
                    borderWidth: 1,
                    marginLeft: 40
                }}
                labelStyle={{
                  color: 'black',
                  fontSize: 15,
                }}
                onPress={() => {
                  navigation.navigate("Login");
                }}
                >Login</Button>
            </View>*/


   /*         {Slides.map((Slides, index) => (
    <SwiperSlide key={index}>
      <Image source={Slides.image} />
      <Text>{Slides.title}</Text>
      <Text>{Slides.description}</Text>
    </SwiperSlide>
  ))}
</Swiper>*/