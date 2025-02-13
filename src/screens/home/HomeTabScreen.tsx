import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { BrandColor, NeutralColor } from '@design/library';
import { Col, Row, Span } from '@design/styleAsProps';
import CustomIcon from 'src/assets/icons';
import CustomSafeAreaView from '@design/CustomSafeAreaView';

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

  const renderSelection = () => {
    return (
      <Col ph6 mt20>
        <Row bgNeutral100 radius12 ph16 pv12 alignCenter justifyBetween shadowColor={NeutralColor['neutral-50']} shadowOpacity={0.3} shadowRadius={3}>
          <Row>
            <CustomIcon name="drop-in-visit-icon" size={36} color={BrandColor['brand-blue']} />
            <Col ml10 w250>
              <Span subTitleS>가정방문 돌봄 서비스</Span>
              <Span bodyS colorNeutral40 mt4 numberOfLines={1}>
                시터가 가정으로 방문해서 아이를 돌봐주는 서비스 dflkajfkdsakjflkd
              </Span>
            </Col>
          </Row>
          <Ionicons name="chevron-forward" size={24} />
        </Row>
      </Col>
    );
  };
  /***********
   * render()
   ***********/

  return (
    <CustomSafeAreaView>
      <Col ph18>
        {renderSelection()}
        {renderSelection()}
        {renderSelection()}
        {renderSelection()}
        {renderSelection()}
      </Col>
    </CustomSafeAreaView>
  );
};

export default HomeTabScreen;
