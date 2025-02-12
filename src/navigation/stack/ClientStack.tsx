import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ClientStackParamList } from '@navigation/type';
import { ClientNavigationBar } from '@navigation/bottomTab/ClientNavigationBar';

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
      {/* *********************** */}

      {/****** Modal Groups *******/}
      {/* *********************** */}
    </ClientStack.Navigator>
  );
};

export default ClientStackNavigation;
