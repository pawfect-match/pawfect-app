import { ButtonType } from '@design/type';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BottomModalProps {
  title?: string;
  children: JSX.Element;
  animationInTiming?: number;
  animationOutTiming?: number;
  hideModalContentWhileAnimating?: boolean;
  backdropColor?: string;
  backdropOpacity?: number;
  buttons?: ButtonType.AttrWithType[];
}

const BottomModal = ({ navigation, route }) => {
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

  return <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}></SafeAreaView>;
};

const styles = StyleSheet.create({});

export default BottomModal;
