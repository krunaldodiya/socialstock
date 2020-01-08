import {useQuery} from '@apollo/react-hooks';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {GET_INITIAL_SCREEN} from '../graphql/query';
import getStackNavigator from '../libs/route';

export const InitialScreen = () => {
  const {data} = useQuery(GET_INITIAL_SCREEN);

  const AppNavigator = getStackNavigator(data?.initialScreen);
  const App = createAppContainer(AppNavigator);

  return <App />;
};
