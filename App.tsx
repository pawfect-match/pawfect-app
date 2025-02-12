/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import CustomSafeAreaView from '@design/CustomSafeAreaView';
import { Col, Row, Span } from '@design/styleAsProps';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { PawfectNavigationRef } from '@navigation/index';
import ClientStackNavigation from '@navigation/stack/ClientStack';

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
