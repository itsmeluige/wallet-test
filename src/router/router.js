import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import WalletCadastro from '../screens/WalletCadastro/WalletCadastro';
import WalletBlackCard from '../screens/WalletBlackCard/WalletBlackCard';
import WalletInicio from '../screens/WalletInicio/WalletInicio';
import WalletError from '../screens/WalletError/WalletError';
import WalletCadastroSuccess from '../screens/WalletCadastroSuccess/WalletCadastroSuccess';
import WalletLoadingScreen from '../screens/WalletLoadingScreen/WalletLoadingScreen';
import WalletBlackFirst from '../screens/WalletBlackFirst/WalletBlackFirst';
import WalletGreenSecond from '../screens/WalletGreenSecond/WalletGreenSecond';
import WalletGreenCard from '../screens/WalletGreenCard/WalletGreenCard';
import WalletScanner from '../screens/WalletScanner/WalletScanner';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Router = props => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="WalletInicio"
              component={WalletInicio}
              options={{ headerShown: false }}
              {...props}
            />
            <Stack.Screen
              name="WalletCadastro"
              component={WalletCadastro}
              options={{ headerShown: false }}
              {...props}
            />
            <Stack.Screen
              name="WalletBlackCard"
              component={WalletBlackCard}
              options={{ headerShown: false }}
              {...props}
            />
            <Stack.Screen
              name="WalletCadastroSuccess"
              component={WalletCadastroSuccess}
              options={{ headerShown: false }}
              {...props}
            />
            <Stack.Screen
              name="WalletLoadingScreen"
              component={WalletLoadingScreen}
              options={{ headerShown: false }}
              {...props}
            />
            <Stack.Screen
              name="WalletBlackFirst"
              component={WalletBlackFirst}
              options={{ headerShown: false }}
              {...props}
            />
            <Stack.Screen
              name="WalletGreenSecond"
              component={WalletGreenSecond}
              options={{ headerShown: false }}
              {...props}
            />
            <Stack.Screen
              name="WalletGreenCard"
              component={WalletGreenCard}
              options={{ headerShown: false }}
              {...props}
            />
            <Stack.Screen
              name="WalletScanner"
              component={WalletScanner}
              options={{ headerShown: false }}
              {...props}
            />
            <Stack.Screen
              name="WalletError"
              component={WalletError}
              options={{ headerShown: false }}
              {...props}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default Router;
