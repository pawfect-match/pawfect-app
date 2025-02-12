import React from 'react';

import { NavigationContainerRef, StackActions } from '@react-navigation/native';
import { ClientStackParamList } from './type';

export const PawfectNavigationRef: React.RefObject<NavigationContainerRef<ClientStackParamList>> | undefined = React.createRef();

export async function navigate(screenName: string, params?: any) {
  // @ts-ignore
  PawfectNavigationRef.current?.navigate(screenName, params);
}

export function push(screenName: string, params?: any) {
  PawfectNavigationRef.current.dispatch(StackActions.push(screenName, params));
}

export function pop() {
  PawfectNavigationRef.current.dispatch(StackActions.pop());
}

export function goBack() {
  PawfectNavigationRef.current?.goBack();
}

export function popToTop() {
  const targetScreen = PawfectNavigationRef.current.getRootState?.()?.routes?.[0]?.name;
  if (!targetScreen) return;
  // @ts-ignore
  PawfectNavigationRef.current.navigate(targetScreen);
}

export function replace(screenName: string, params?: any) {
  PawfectNavigationRef.current.dispatch(StackActions.replace(screenName, params));
}

export function getCurrentScreenName() {
  return PawfectNavigationRef.current?.getCurrentRoute()?.name || '';
}

export const PawfectNavigationModule = {
  navigate,
  push,
  pop,
  goBack,
  popToTop,
  replace,
  getCurrentScreenName,
};
