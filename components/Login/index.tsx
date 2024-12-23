import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin= () => {
    login("fff");
    // router.push("/index");
  }
  return (
    <View className='w-full h-full p-14'>
      <Text className='mt-60'>Login</Text>
      <View className='mt-4'>
        <Text>Имейл хаяг</Text>
        <TextInput className='bg-white py-4 px-3 mt-2 rounded-xl border w-full focus:border-blue-600 border-gray-200' placeholder='Имейл хаяг оруулах'/>
        <TextInput className='bg-white py-4 px-3 mt-2 rounded-xl border w-full focus:border-blue-600 border-gray-200' placeholder='Имейл хаяг оруулах'/>
        <TouchableOpacity
          onPress={handleLogin}
          className="w-full bg-blue-600 rounded-xl mt-4 py-3 px-2"
        >
          <Text className="text-center text-white text-lg font-medium">Нэвтрэх</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login