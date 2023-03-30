import { View, Text } from 'react-native'
import React from 'react'

const MainContainer = ({children}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#Ffffff' }}>
        {children}
    </View>
  )
}

export default MainContainer