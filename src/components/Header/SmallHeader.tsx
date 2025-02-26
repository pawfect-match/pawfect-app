import { NeutralColor } from '@design/library';
import { Row, Span } from '@design/styleAsProps';
import { Colors } from '@design/styleAsProps/StyleProps';
import { PawfectNavigationModule } from '@navigation/index';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface SmallHeaderProps {
  title?: string;
  isBackButton?: boolean;
  rightButton?: React.Component;
  onPressRightButton?: void;
  backgroundColor?: typeof Colors;
}

const Header: React.FC<SmallHeaderProps> = ({ title, isBackButton = true, rightButton, onPressRightButton, backgroundColor }: SmallHeaderProps) => {
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

  const renderBackButton = () => {
    if (backButton) {
      return (
        <TouchableOpacity onPress={() => PawfectNavigationModule.pop()}>
          <Ionicons name="chevron-back-outline" size={24} />
        </TouchableOpacity>
      );
    }
    return <></>;
  };
  /***********
   * render()
   ***********/

  return (
    <Row bg={backgroundColor || NeutralColor['transparent']} pv10>
      {renderBackButton()}
      <Span ml12 titleXL>
        {title || ''}
      </Span>
    </Row>
  );
};

const styles = StyleSheet.create({});

export default Header;
