import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IconType } from '@design/type';
import { CustomImage } from '@components/CustomImage';
import { Col, Row, Span } from '@design/styleAsProps';
import { blank_image } from '@images';
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
    return (
      <Col radius18 overflowHidden>
        <CustomImage src={profilePic} size={'xLarge'} resize="cover" />
      </Col>
    );
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
  /***********
   * render()
   ***********/

  return (
    <Row pv6>
      <Col>
        <Row alignCenter>
          {renderProfile()}
          {renderInformation()}
        </Row>
        {renderMessage()}
      </Col>
    </Row>
  );
};

const styles = StyleSheet.create({});

export default MessageCard;
