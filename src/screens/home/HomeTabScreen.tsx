import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { BrandColor, NeutralColor } from '@design/library';
import { Col, Row, Span } from '@design/styleAsProps';
import CustomSafeAreaView from '@design/CustomSafeAreaView';
import HomeServiceCard, { HomeServiceCardProps } from './components/HomeServiceCard';
import { CustomIcon } from '@components/CustomIcon';
import i18n from '@locales';
import { PawfectNavigationModule } from '@navigation/index';
import { Client } from '@navigation/type';

interface Props {}

const data = [
  {
    id: 0,
    title: i18n.t('common-boarding'),
    description: i18n.t('service-boarding-description'),
    logo: <CustomIcon xLarge48PetBoarding />,
    recurring: false,
  },
  {
    id: 1,
    title: i18n.t('common-drop-in-visit'),
    description: i18n.t('service-drop-in-visit-description'),
    logo: <CustomIcon xLarge48DropInVisit />,
    recurring: true,
  },
  {
    id: 2,
    title: i18n.t('common-dog-walking'),
    description: i18n.t('service-dog-walking-description'),
    logo: <CustomIcon xLarge48DogWalking />,
    recurring: true,
  },
  {
    id: 3,
    title: i18n.t('common-grooming'),
    description: i18n.t('service-grooming-description'),
    logo: <CustomIcon xLarge48PetGrooming />,
    recurring: false,
  },
  {
    id: 4,
    title: i18n.t('common-vet-companion'),
    description: i18n.t('service-vet-companion-description'),
    logo: <CustomIcon xLarge48VetCare />,
    recurring: false,
  },
];

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

  /**************
   * life cycles
   **************/

  /************
   * functions
   ************/

  const onPressCard = ({ item }: { item: (typeof data)[number] }) => {
    if (item.recurring) {
      return PawfectNavigationModule.navigate(Client.HomeDetailRecurring, { headerTitle: item.title });
    } else {
      return PawfectNavigationModule.navigate(Client.HomeDetailNonRecurring, { headerTitle: item.title });
    }
  };

  /*********
   * render
   *********/

  const renderTitle = () => {
    return <Span headlineM>{i18n.t('client-select-service')}</Span>;
  };

  const renderItem = ({ item }: { item: (typeof data)[number] }) => {
    return (
      <TouchableOpacity onPress={() => onPressCard({ item })}>
        <HomeServiceCard title={item.title} description={item.description} logo={item.logo} />
      </TouchableOpacity>
    );
  };

  const renderFlatList = () => {
    return <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => `home-tab-selection-${index}`} style={{}} />;
  };

  /***********
   * render()
   ***********/

  return (
    <Col ph16 pv20>
      {renderTitle()}
      <Col mt20>{renderFlatList()}</Col>
    </Col>
  );
};

export default HomeTabScreen;
