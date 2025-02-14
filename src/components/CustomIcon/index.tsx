import { CustomImage } from '@components/CustomImage';
import { SpaceStyle } from '@design/type';
import React from 'react';

export const PetBoarding = require('@images/icons/pet-boarding.svg');
export const DropInVisit = require('@images/icons/drop-in-visit.svg');
export const DogWalking = require('@images/icons/dog-walking.svg');
export const PetGrooming = require('@images/icons/pet-grooming.svg');
export const VetCare = require('@images/icons/vet-care.svg');

type imageType = {
  padding?: SpaceStyle.Margin;

  xLarge48PetBoarding?: boolean;
  large32PetBoarding?: boolean;
  xLarge48DropInVisit?: boolean;
  large32DropInVisit?: boolean;
  xLarge48DogWalking?: boolean;
  large32DogWalking?: boolean;
  xLarge48PetGrooming?: boolean;
  large32PetGrooming?: boolean;
  xLarge48VetCare?: boolean;
  large32VetCare?: boolean;
};

export const CustomIcon = (props: imageType) => {
  if (props?.xLarge48PetBoarding) return <CustomImage src={PetBoarding} padding={props?.padding} size={{ width: 48, height: 48 }} />;
  if (props?.large32PetBoarding) return <CustomImage src={PetBoarding} padding={props?.padding} size={{ width: 32, height: 32 }} />;
  if (props?.xLarge48DropInVisit) return <CustomImage src={DropInVisit} padding={props?.padding} size={{ width: 48, height: 48 }} />;
  if (props?.large32DropInVisit) return <CustomImage src={DropInVisit} padding={props?.padding} size={{ width: 32, height: 32 }} />;
  if (props?.xLarge48DogWalking) return <CustomImage src={DogWalking} padding={props?.padding} size={{ width: 48, height: 48 }} />;
  if (props?.large32DogWalking) return <CustomImage src={DogWalking} padding={props?.padding} size={{ width: 32, height: 32 }} />;
  if (props?.xLarge48PetGrooming) return <CustomImage src={PetGrooming} padding={props?.padding} size={{ width: 48, height: 48 }} />;
  if (props?.large32PetGrooming) return <CustomImage src={PetGrooming} padding={props?.padding} size={{ width: 32, height: 32 }} />;
  if (props?.xLarge48VetCare) return <CustomImage src={VetCare} padding={props?.padding} size={{ width: 48, height: 48 }} />;
  if (props?.large32VetCare) return <CustomImage src={VetCare} padding={props?.padding} size={{ width: 32, height: 32 }} />;

  return <></>;
};
