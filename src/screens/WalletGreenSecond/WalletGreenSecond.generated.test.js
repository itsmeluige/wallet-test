import renderer from 'react-test-renderer';
import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import WalletGreenSecond from './WalletGreenSecond';

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
      data: { name: 'Teste', number: '1111 1111 1111 1111', validAt: '07/23' },
      secondCard: true,
      blackCard: [],
    },
  },
};

test('renders correctly', () => {
  const tree = renderer.create(<WalletGreenSecond {...routeParams} />).toJSON();
  expect(tree).toMatchSnapshot();
});
