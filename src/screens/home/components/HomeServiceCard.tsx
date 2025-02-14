import { Col, Row, Span } from '@design/styleAsProps';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

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
      <Span titleL mb4>
        {props.title}
      </Span>
    );
  };

  const renderDescription = () => {
    return <Span subTitleM>{props.description}</Span>;
  };

  const renderLeftside = () => {
    return (
      <Row>
        <Col alignCenter justifyCenter>
          {props.logo}
        </Col>
        <Col ml12 justifyCenter>
          {renderTitle()}
          {renderDescription()}
        </Col>
      </Row>
    );
  };

  /***********
   * render()
   ***********/

  return <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>{renderLeftside()}</SafeAreaView>;
};

export default HomeServiceCard;
