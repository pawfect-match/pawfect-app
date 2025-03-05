import { Row, Span } from '@design/styleAsProps';
import i18n from '@locales';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {}

const MessageTabFilterBar = () => {
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

  /************
   * functions
   ************/

  const onPressSort = () => {};

  /*********
   * render
   *********/

  const renderSort = () => {
    return (
      <TouchableOpacity style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}>
        <Ionicons name="filter-circle-outline" size={24} />
        <Span titleS ml5>
          {i18n.t('common-sort')}
        </Span>
      </TouchableOpacity>
    );
  };

  const renderArchived = () => {
    return (
      <TouchableOpacity>
        <Ionicons name="archive-outline" size={24} />
      </TouchableOpacity>
    );
  };

  /***********
   * render()
   ***********/

  return (
    <Row ph14 pv12 alignCenter justifyBetween>
      {renderSort()}
      {renderArchived()}
    </Row>
  );
};

const styles = StyleSheet.create({});

export default MessageTabFilterBar;
