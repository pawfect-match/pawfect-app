import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { BrandColor, NeutralColor } from '@design/library';
import { Col, Row, Span } from '@design/styleAsProps';
import CustomSafeAreaView from '@design/CustomSafeAreaView';
import HomeServiceCard, { HomeServiceCardProps } from './components/HomeServiceCard';
import { CustomIcon } from '@components/CustomIcon';
import i18n from '@locales';

interface Props {}

const data = [
  {
    id: 0,
    title: i18n.t('common-boarding'),
    description: i18n.t('service-boarding-description'),
    logo: <CustomIcon xLarge48PetBoarding />,
  },
  {
    id: 1,
    title: i18n.t('common-drop-in-visit'),
    description: i18n.t('service-drop-in-visit-description'),
    logo: <CustomIcon xLarge48DropInVisit />,
  },
  {
    id: 2,
    title: i18n.t('common-dog-walking'),
    description: i18n.t('service-dog-walking-description'),
    logo: <CustomIcon xLarge48DogWalking />,
  },
  {
    id: 3,
    title: i18n.t('common-grooming'),
    description: i18n.t('service-grooming-description'),
    logo: <CustomIcon xLarge48PetGrooming />,
  },
  {
    id: 4,
    title: i18n.t('common-vet-companion'),
    description: i18n.t('service-vet-companion-description'),
    logo: <CustomIcon xLarge48VetCare />,
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
    return <Span headlineM>{i18n.t('client-select-service')}</Span>;
  };

  const renderItem = ({ item }) => {
    return <HomeServiceCard title={item.title} description={item.description} logo={item.logo} />;
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
