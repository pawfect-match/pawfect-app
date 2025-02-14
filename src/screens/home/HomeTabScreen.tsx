import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { BrandColor, NeutralColor } from '@design/library';
import { Col, Row, Span } from '@design/styleAsProps';
import CustomSafeAreaView from '@design/CustomSafeAreaView';
import HomeServiceCard, { HomeServiceCardProps } from './components/HomeServiceCard';
import { CustomIcon } from '@components/CustomIcon';

interface Props {}

const data = [
  {
    id: 0,
    title: '위탁 돌봄',
    description: '반려동물이 시터 집으로 가요.',
    logo: <CustomIcon xLarge48PetBoarding />,
  },
  {
    id: 1,
    title: '가정방문 돌봄',
    description: '시터가 반려동물이 있는 가정으로 방문해요.',
    logo: <CustomIcon xLarge48DropInVisit />,
  },
  {
    id: 2,
    title: '강아지 산책',
    description: '시터가 강이자와 함께 산책해요.',
    logo: <CustomIcon xLarge48DogWalking />,
  },
  {
    id: 3,
    title: '미용/그루밍',
    description: '미용과 그루밍을 대신 해줘요.',
    logo: <CustomIcon xLarge48PetGrooming />,
  },
  {
    id: 4,
    title: '병원 동행',
    description: '시터가 병원에 대신 가줘요.',
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

  const renderItem = ({ item }) => {
    return <HomeServiceCard title={item.title} description={item.description} logo={item.logo} />;
  };

  const renderFlatList = () => {
    return <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => `home-tab-selection-${index}`} />;
  };

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
      <Col ph18>{renderFlatList()}</Col>
    </CustomSafeAreaView>
  );
};

export default HomeTabScreen;
