import Header from '@components/Header';
import { Col } from '@design/styleAsProps';
import { ClientStackParamList } from '@navigation/type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

interface Props {}

const HomeDetailNonRecurring = ({ navigation, route }: NativeStackScreenProps<ClientStackParamList, 'HomeDetailNonRecurring'>) => {
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
    console.log(route.params.headerTitle);
  }, []);

  /************
   * functions
   ************/

  /*********
   * render
   *********/

  const renderHeader = () => {
    return <Header title={route.params.headerTitle} />;
  };

  /***********
   * render()
   ***********/

  return (
    <Col flex bgAlertMajor>
      {renderHeader()}
      <Col flex bgAlertCritical>
        Hellp
      </Col>
    </Col>
  );
};

const styles = StyleSheet.create({});

export default HomeDetailNonRecurring;
