import { Row, Span } from '@design/styleAsProps';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface HeaderProps {
  title?: string;
  backButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, backButton = true }: HeaderProps) => {
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
    <Row>
      {backButton ? <Ionicons name="chevron-backward" size={24} /> : <></>}

      <Span titleXL>{title}</Span>
    </Row>
  );
};

const styles = StyleSheet.create({});

export default Header;
