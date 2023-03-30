import { View, Text, useWindowDimensions, StyleSheet, Image } from 'react-native'
import React from 'react'
import Slides from '../style/Slides';



const OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image source = {item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />

    <View>
        <Text style={styles.title}>
            {item.title}
        </Text>
        
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 0.5,
        justifyContent: 'center'
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 5,
        color: '#001232',
        textAlign: 'center',
    }
})

export default OnboardingItem


/*<Text style={styles.description}>
{item.description}
</Text>*/