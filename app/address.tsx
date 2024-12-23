import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { useAuth } from '@/context/AuthContext'

const Address = () => {
  const {userToken} = useAuth();

  return (
    <View>
      <Text>Address</Text>
    </View>
  )
}

export default Address