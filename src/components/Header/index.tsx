import { NeutralColor } from '@design/library';
import { Row, Span } from '@design/styleAsProps';
import { Colors } from '@design/styleAsProps/StyleProps';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface HeaderProps {
  title?: string;
  backButton?: boolean;
  backgroundColor?: typeof Colors;
}

const Header: React.FC<HeaderProps> = ({ title, backButton = true, backgroundColor }: HeaderProps) => {
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
    <Row bg={backgroundColor || NeutralColor['transparent']} pv10>
      {backButton ? <Ionicons name="chevron-back-outline" size={24} /> : <></>}
      <Span ml12 titleXL>
        {title || ''}
      </Span>
    </Row>
  );
};

const styles = StyleSheet.create({});

export default Header;
