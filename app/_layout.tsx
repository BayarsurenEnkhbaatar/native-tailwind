import { SplashScreen, Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import TabBar from '@/components/TabBar';
import Login from '@/components/Login';
import { useFonts } from 'expo-font';
import SplashScreenMy from '@/components/SplashScreenMy';

const AppTabs = () => {
  const { userToken, loading } = useAuth();
  const [fontsLoaded] = useFonts({
    "ChEuropeExt": require('../assets/fonts/ChEuropeExt.ttf'),
    "ChEuropeExtBold": require('../assets/fonts/ChEuropeExtBold.ttf'),
    "AGOptimaMon": require('../assets/fonts/AGOptimaMon.ttf'),
    "specemono": require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(()=>{
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) return null;

  if (loading) {
    return <SplashScreenMy />;
  }

  if (!userToken) {
    return <Login />;
  }

  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Нүүр',
          tabBarLabel: 'Нүүр',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="address"
        options={{
          title: 'Address',
          tabBarLabel:'Хаяг холбох',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help',
          tabBarLabel:'Тусламж',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel:'Хэрэглэгч',
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

const _layout = () => {
  return (
    <AuthProvider>
      <AppTabs />
    </AuthProvider>
  );
};

export default _layout;
