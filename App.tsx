/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import CustomSafeAreaView from '@design/CustomSafeAreaView';
import { NavigationContainer } from '@react-navigation/native';
import { PawfectNavigationRef } from '@navigation/index';
import ClientStackNavigation from '@navigation/stack/ClientStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaProvider>
      <CustomSafeAreaView>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
          <NavigationContainer ref={PawfectNavigationRef}>
            <ClientStackNavigation />
          </NavigationContainer>
        </GestureHandlerRootView>
      </CustomSafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
