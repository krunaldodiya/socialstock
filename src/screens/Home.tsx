import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {FocusContainer} from './FocusContainer';
import {FunContainer} from './FunContainer';

export const Home = createMaterialTopTabNavigator(
  {
    Fun: FunContainer,
    Focus: FocusContainer,
  },
  {
    defaultNavigationOptions: {
      tabBarVisible: false,
      swipeEnabled: true,
    },
  },
);
