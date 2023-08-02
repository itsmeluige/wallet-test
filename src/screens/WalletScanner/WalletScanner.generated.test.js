import renderer from 'react-test-renderer';
import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import WalletScanner from './WalletScanner';

jest.mock('@react-navigation/native');
jest.mock('./styles');

jest.useFakeTimers();

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
    useIsFocused: jest.fn(),
  };
});

jest.mock('react-native', () => {
  const rn = jest.requireActual('react-native');
  rn.StyleSheet.create = () => ({});
  return rn;
});

jest.mock('rn-card-scanner', () => 'CardScannerResponse');

test('renders correctly', () => {
  const tree = renderer.create(<WalletScanner />).toJSON();
  expect(tree).toMatchSnapshot();
});
