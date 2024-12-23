import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import "./globals.css"
import { useAuth } from '@/context/AuthContext';
import Login from '@/components/Login';
import { Ionicons } from '@expo/vector-icons';

const Index = () => {
  const { userToken } = useAuth();
  
  if (!userToken) {
    return (
      <Login/>
    );
  }

  const { logout } = useAuth();

  const handleLogin= () => {
    logout();
    // router.push("/index");
  }

  return (
    <View className=''>
      {/* <TouchableOpacity
          onPress={handleLogin}
          className="w-full bg-blue-600 rounded-xl"
        >
          <Text className="text-center text-white text-lg font-medium py-4">Гарах</Text>
        </TouchableOpacity> */}
        <View className='flex flex-row items-center justify-between mt-20 mx-6'>
          <View className='flex flex-row items-center gap-2'>
            <View className='bg-yellow-300 rounded-full p-2 flex items-center justify-center'>
              <Text className='text-4xl'>👱‍♂️</Text>
            </View>
            <View>
              <Text className='font-bold text-lg'>Alex Drobeter</Text>
              <Text className='text-xs text-gray-500'>806666605</Text>
            </View>
          </View>
          <View className='bg-gray-200 p-2 rounded-md'>
            <Ionicons name="notifications-outline" size={26}/>
          </View>
        </View>
        <View className='border border-gray-200 w-full mt-4'></View>
    </View>
  )
}

export default Index