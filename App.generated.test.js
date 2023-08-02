import renderer from 'react-test-renderer';
import React from 'react';
import Router from './src/router/router';
import App from './App';

jest.mock('./src/router/router');
jest.mock('react-native-text-input-mask', () => {});

const renderTree = tree => renderer.create(tree);
describe('<App>', () => {
  it('should render component', () => {
    expect(renderTree(<App />).toJSON()).toMatchSnapshot();
  });
});
