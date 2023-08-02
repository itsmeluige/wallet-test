import renderer from 'react-test-renderer';
import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import WalletInicio from './WalletInicio';

jest.mock('react-native');
jest.mock('@react-navigation/native');
jest.mock('./styles');

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      addListener: jest.fn(),
    }),
  };
});

jest.mock('react-native', () => {
  const rn = jest.requireActual('react-native');
  rn.StyleSheet.create = () => ({});
  return rn;
});

const routeParams = {
  route: {
    params: {
      goBack: true,
    },
  },
};

test('renders correctly', () => {
  const tree = renderer.create(<WalletInicio {...routeParams} />).toJSON();
  expect(tree).toMatchSnapshot();
});
