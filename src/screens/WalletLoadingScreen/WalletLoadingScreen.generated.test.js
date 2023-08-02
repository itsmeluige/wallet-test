import React, { useEffect } from 'react';
import renderer from 'react-test-renderer';
import WalletLoadingScreen from './WalletLoadingScreen';

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

test('renders correctly', () => {
  const tree = renderer.create(<WalletLoadingScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
