import { Col } from '@design/styleAsProps';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import MessageCard from './components/MessageCard';
import MessageTabFilterBar from './components/MessageTabFilterBar';
import { pop_cat } from '@images';

interface Props {}
const mockMessages = [
  {
    id: '1',
    ownerName: '신영진',
    petName: 'Pepper',
    date: new Date(2025, 2, 4, 12, 0, 0),
    lastMessage: '네 그럼 거기서 뵙겠습니다.',
    profilePic: pop_cat,
  },
  {
    id: '2',
    ownerName: '마포냥',
    petName: 'Choco',
    date: new Date(2025, 2, 3, 15, 30, 0),
    lastMessage: '좋아요! 일정 확정되면 알려주세요.',
    profilePic: pop_cat,
  },
  {
    id: '3',
    ownerName: '하동훈',
    petName: 'Mochi',
    date: new Date(2025, 2, 2, 9, 45, 0),
    lastMessage: '그럼 다음 주에 뵙겠습니다!',
    profilePic: pop_cat,
  },
  {
    id: '4',
    ownerName: '조서연',
    petName: 'Roy',
    date: new Date(2025, 1, 28, 18, 0, 0),
    lastMessage: '도착하면 연락 주세요.',
    profilePic: '',
  },
  {
    id: '5',
    ownerName: '이주호',
    petName: 'Luna',
    date: new Date(2025, 1, 27, 21, 15, 0),
    lastMessage: '알겠습니다! 감사합니다 😊',
    profilePic: pop_cat,
  },
  {
    id: '6',
    ownerName: '변세훈',
    petName: '피자',
    date: new Date(2024, 1, 26, 14, 20, 0),
    lastMessage: '시간 변경 가능할까요?',
    profilePic: '',
  },
  {
    id: '7',
    ownerName: 'Janna',
    petName: 'Rocky',
    date: new Date(2024, 1, 25, 16, 0, 0),
    lastMessage: '내일 일정 조정 가능하신가요?',
    profilePic: '',
  },
  {
    id: '8',
    ownerName: '가나다',
    petName: 'Milo',
    date: new Date(2023, 1, 24, 10, 10, 0),
    lastMessage: '네, 알겠습니다! 😊',
    profilePic: '',
  },
  {
    id: '9',
    ownerName: 'heisenberg',
    petName: 'Bailey',
    date: new Date(2023, 1, 23, 20, 45, 0),
    lastMessage: '좋아요! 일정 조율해서 다시 연락드릴게요.',
    profilePic: '',
  },
  {
    id: '10',
    ownerName: 'Jesse Pinkman',
    petName: 'Toby',
    date: new Date(2023, 1, 22, 8, 30, 0),
    lastMessage: '시간 맞춰서 갈게요!',
    profilePic: '',
  },
];

const MessagesTabScreen = ({ navigation, route }) => {
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
  const itemSeparator = () => {
    return <Col h14></Col>;
  };

  const renderItem = ({ item }: { item: (typeof mockMessages)[number] }) => {
    return (
      <TouchableOpacity>
        <MessageCard ownerName={item.ownerName} petName={item.petName} date={item.date} lastMessage={item.lastMessage} profilePic={item.profilePic} />
      </TouchableOpacity>
    );
  };

  const renderFlatList = () => {
    return (
      <FlatList
        data={mockMessages}
        renderItem={renderItem}
        keyExtractor={(item, index) => `message-tab-card-${index}`}
        ItemSeparatorComponent={itemSeparator}
        style={{ paddingHorizontal: 18 }}
      />
    );
  };

  /***********
   * render()
   ***********/

  return (
    <Col>
      <MessageTabFilterBar />
      {renderFlatList()}
    </Col>
  );
};

const styles = StyleSheet.create({});

export default MessagesTabScreen;
