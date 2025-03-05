import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IconType } from '@design/type';
import { CustomImage } from '@components/CustomImage';
import { Col, Row, Span } from '@design/styleAsProps';
import { blank_image } from '@images';
import formatTime from '@utilities/FormatTime';
interface MessageCardProps {
  profilePic?: IconType.ImageSource;
  ownerName: string;
  petName: string | string[];
  lastMessage: string;
  date: Date;
}

const MessageCard = ({ profilePic, ownerName, petName, lastMessage, date }: MessageCardProps) => {
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

  const renderProfile = () => {
    return <CustomImage src={profilePic} size={'xLarge'} resize="cover" shape="circle" />;
  };

  const renderInformation = () => {
    return (
      <Col ml10>
        <Span labelL>{ownerName}</Span>
        <Span labelM colorNeutral30 mt2>
          {petName}
        </Span>
      </Col>
    );
  };

  const renderMessage = () => {
    return (
      <Span bodyM colorNeutral30 mt5>
        {lastMessage}
      </Span>
    );
  };

  const renderDate = () => {
    return (
      <Span colorNeutral30 bodyS>
        {formatTime(date)}
      </Span>
    );
  };
  /***********
   * render()
   ***********/

  return (
    <Row pv6 justifyBetween>
      <Col>
        <Row alignCenter>
          {renderProfile()}
          {renderInformation()}
        </Row>
        {renderMessage()}
      </Col>
      {renderDate()}
    </Row>
  );
};

export default MessageCard;
