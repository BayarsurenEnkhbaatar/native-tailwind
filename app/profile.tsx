import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderImage from "../assets/images/my/header.png";
import { EvilIcons } from '@expo/vector-icons';
import product from "../assets/icons/product.png"
import home from "../assets/icons/home.png"
import delivery from "../assets/icons/deliv.png"
import { useAuth } from '@/context/AuthContext';

const Profile = () => {
  const { logout } = useAuth();

  const handleLogin= () => {
    logout();
  }

  return (
    <View className='bg-white h-full'>
      <Image className='h-80 w-full' source={HeaderImage}/>
      <View className='mx-6 font-spacemono'>
        <Text className='text-6xl mt-[-40px] text-center'>👱‍♂️</Text>
        <Text className='text-3xl text-center font-bold'>Bayarsuren</Text>
        <Text className='text-lg opacity-80 text-center'>Logistic cargo application</Text>

        <Text className='text-xl font-bold mt-16'>Миний цэсүүд</Text>
        <View className='flex flex-row items-center justify-between mt-4 border rounded-md p-4 border-gray-200'>
          <View className='flex flex-row items-center gap-4'>
            <Image className='h-14 w-14 bg-yellow-100 rounded-full p-2' source={product}/>
            <View>
              <Text className='text-xl font-bold'>Бараанууд</Text>
              <Text className='text-sm'>Миний захиалсан бараанууд</Text>
            </View>
          </View>
          <EvilIcons name="arrow-right" size={32} color="black" />
        </View>

        <View className='flex flex-row items-center justify-between mt-4 border rounded-md p-4 border-gray-200'>
          <View className='flex flex-row items-center gap-4'>
            <Image className='h-14 w-14 bg-yellow-100 rounded-full p-2' source={home}/>
            <View>
              <Text className='text-xl font-bold'>Хаяг</Text>
              <Text className='text-sm'>Гэрийн хаягийн мэдээлэл</Text>
            </View>
          </View>
          <EvilIcons name="arrow-right" size={32} color="black" />
        </View>

        <View className='flex flex-row items-center justify-between mt-4 border rounded-md p-4 border-gray-200'>
          <View className='flex flex-row items-center gap-4'>
            <Image className='h-14 w-14 bg-yellow-100 rounded-full p-2' source={delivery}/>
            <View>
              <Text className='text-xl font-bold'>Хүргэлт</Text>
              <Text className='text-sm'>Хүргэлтийн мэдээлэл</Text>
            </View>
          </View>
          <EvilIcons name="arrow-right" size={32} color="black" />
        </View>

        <View className='flex flex-row justify-center'>
         <TouchableOpacity onPress={handleLogin}>
          <Text className='bg-gray-100 p-2 rounded-xl mt-4 w-40 text-center'>Гарах</Text>
         </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Profile