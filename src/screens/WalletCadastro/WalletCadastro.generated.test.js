import renderer from 'react-test-renderer';
import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import WalletCadastro from './WalletCadastro';

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
  };
});

jest.mock('react-native', () => {
  const rn = jest.requireActual('react-native');
  rn.StyleSheet.create = () => ({});
  return rn;
});

jest.mock('react-native-text-input-mask', () => 'TextInputMask');

const routeParams = {
  route: {
    params: {
      scannerNumber: '1111 1111 1111 1111',
      scannerDate: '07/23',
    },
  },
};

test('renders correctly', () => {
  const tree = renderer.create(<WalletCadastro {...routeParams} />).toJSON();
  expect(tree).toMatchSnapshot();
});
