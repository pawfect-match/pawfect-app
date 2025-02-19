import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Row, Span } from '@design/styleAsProps';
import { HardwareInfo } from '@utilities/HardwareInfo';
import { BrandColor, NeutralColor } from '@design/library';
import { Dimensions, TouchableOpacity } from 'react-native';
import HomeTabScreen from '@screens/home/HomeTabScreen';
import MessagesTabScreen from '@screens/messages/MessagesTabScreen';
import ReservationsTabScreen from '@screens/reservations/ReservationsTabScreen';
import SettingsTabScreen from '@screens/settings/SettingsTabScreen';

const ClientBottomTab = createBottomTabNavigator();

export const ClientNavigationBar = () => {
  return (
    <ClientBottomTab.Navigator tabBar={props => <ClientTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <ClientBottomTab.Screen name="Home" component={HomeTabScreen} />
      <ClientBottomTab.Screen name="Messages" component={MessagesTabScreen} />
      <ClientBottomTab.Screen name="Reservations" component={ReservationsTabScreen} />
      <ClientBottomTab.Screen name="Settings" component={SettingsTabScreen} />
    </ClientBottomTab.Navigator>
  );
};

const ClientTabBar = ({ state, descriptors, navigation }) => {
  const displayOptions = descriptors[state.routes[state.index].key].options;
  if (displayOptions?.tabBarStyle?.display === 'none') return null;

  return (
    <Row h={HardwareInfo.hasNotch ? 85 : 65} bgNeutral100 ph12 pb={HardwareInfo.hasNotch ? 20 : 0}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const hasText = Dimensions.get('window').width >= 360;

        console.log(descriptors);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const accessibilityLabel = () => {
          if (options.tabBarLabel !== undefined) {
            return options.tabBarLabel;
          } else {
            return options.title !== undefined ? options.title : route.name;
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel()}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ClientTabBarIcon focused={isFocused} name={route.name} />
            {hasText && (
              <Span labelS color={isFocused ? BrandColor['brand-blue'] : NeutralColor['neutral-0']}>
                {route?.name}
              </Span>
            )}
          </TouchableOpacity>
        );
      })}
    </Row>
  );
};

const ClientTabBarIcon = (props: { focused: boolean; name: string }) => {
  switch (props.name) {
    case 'Home':
      if (props.focused) return <Ionicons name="home" size={24} color={BrandColor['brand-blue']} />;
      else return <Ionicons name="home-outline" size={24} color={NeutralColor['neutral-0']} />;
    case 'Messages':
      if (props.focused) return <Ionicons name="chatbox-ellipses" size={24} color={BrandColor['brand-blue']} />;
      else return <Ionicons name="chatbox-outline" size={24} color={NeutralColor['neutral-0']} />;
    case 'Reservations':
      if (props.focused) return <Ionicons name="time" size={24} color={BrandColor['brand-blue']} />;
      else return <Ionicons name="time-outline" size={24} color={NeutralColor['neutral-0']} />;
    case 'Settings':
      if (props.focused) return <Ionicons name="settings" size={24} color={BrandColor['brand-blue']} />;
      else return <Ionicons name="settings-outline" size={24} color={NeutralColor['neutral-0']} />;
    default:
      return null;
  }
};
