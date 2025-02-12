import { BrandColor } from '@design/library';
import { Span } from '@design/styleAsProps';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import CustomIcon from 'src/assets/icons';

interface Props {}

const HomeTabScreen = ({ navigation, route }) => {
  /*********
   * recoil
   *********/

  /**************************
   * props, navigation prams
   **************************/

  /*************
   * state, ref
   *************/

  const [isRendering, setIsRendering] = useState<boolean>(true);

  /**************
   * life cycles
   **************/

  useEffect(() => {
    // ComponentDidMount

    // setIsRendering(false)
    return () => {
      // ComponentWillUnmount
    };
  }, []);

  /************
   * functions
   ************/

  /*********
   * render
   *********/

  // if (isRendering === true) {
  // return null
  // }

  /***********
   * render()
   ***********/

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Span>Home tab</Span>
      <CustomIcon name="overnight-boarding-icon" size={200} color={BrandColor['brand-blue']} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeTabScreen;
