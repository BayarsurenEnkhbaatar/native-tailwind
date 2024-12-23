import { View, Text, Image } from 'react-native'
import React from 'react'
import Load from "../../assets/gifs/loading.gif";

const SplashScreenMy = () => {
  return (
    <View className='flex justify-center flex-row items-center w-full h-full'>
      <View className='w-full'>
        <View className='flex flex-row justify-center'>
          <Image source={Load}/>
        </View>
        <Text className='text-center mt-2 animate-pulse'>Систем ачааллаж байна ...</Text>
      </View>
    </View>
  )
}

export default SplashScreenMy