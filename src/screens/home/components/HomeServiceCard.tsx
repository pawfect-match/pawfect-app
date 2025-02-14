import { NeutralColor } from '@design/library';
import { Col, Row, Span } from '@design/styleAsProps';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export interface HomeServiceCardProps {
  title: string;
  description: string;
  logo: React.ReactNode;
}

const HomeServiceCard: React.FC<HomeServiceCardProps> = (props: HomeServiceCardProps) => {
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

  const renderTitle = () => {
    return (
      <Span titleL mb4 numberOfLines={1}>
        {props.title}
      </Span>
    );
  };

  const renderDescription = () => {
    return (
      <Span subTitleS colorNeutral40 numberOfLines={1}>
        {props.description}
      </Span>
    );
  };

  const renderLeftSide = () => {
    return (
      <Row flex>
        <Col alignCenter justifyCenter>
          {props.logo}
        </Col>
        <Col ml12 justifyCenter maxW={'80%'}>
          {renderTitle()}
          {renderDescription()}
        </Col>
      </Row>
    );
  };

  const renderRightSide = () => {
    return (
      <Span>
        <Ionicons name="chevron-forward" size={24} />
      </Span>
    );
  };

  /***********
   * render()
   ***********/

  return (
    <TouchableOpacity>
      <Row flex radius12 ph16 pv14 mb14 shadowColor={NeutralColor['neutral-50']} style={styles.shadow} alignCenter bgNeutral100 justifyBetween>
        {renderLeftSide()}
        {renderRightSide()}
      </Row>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: NeutralColor['neutral-0'],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,

    elevation: 3,
  },
});

export default HomeServiceCard;
