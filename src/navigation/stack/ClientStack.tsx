import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ClientStackParamList } from '@navigation/type';
import { ClientNavigationBar } from '@navigation/bottomTab/ClientNavigationBar';
import HomeDetailNonRecurring from '@screens/home/homeDetail/homeDetailNonRecurring';
import HomeDetailRecurring from '@screens/home/homeDetail/HomeDetailRecurring';

const ClientStack = createNativeStackNavigator<ClientStackParamList>();

const ClientStackNavigation = () => {
  return (
    <ClientStack.Navigator
      screenOptions={{
        headerShown: false,
        animationDuration: 200,
        animation: 'slide_from_right',
      }}>
      {/****** NavigationBar Groups *******/}
      <ClientStack.Screen name="ClientNavigationBar" component={ClientNavigationBar} />
      {/* ******************************** */}

      {/****** Screen Groups *******/}
      <ClientStack.Screen name="HomeDetailNonRecurring" component={HomeDetailNonRecurring} />
      <ClientStack.Screen name="HomeDetailRecurring" component={HomeDetailRecurring} />
      {/* *********************** */}

      {/****** Modal Groups *******/}
      {/* *********************** */}
    </ClientStack.Navigator>
  );
};

export default ClientStackNavigation;
