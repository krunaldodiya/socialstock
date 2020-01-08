import {createStackNavigator} from 'react-navigation-stack';

import {Login} from '../screens/auth/Login';
import {Register} from '../screens/auth/Register';
import {RequestOtp} from '../screens/auth/RequestOtp';
import {SelectCountry} from '../screens/auth/SelectCountry';
import {SelectLanguage} from '../screens/auth/SelectLanguage';
import {VerifyOtp} from '../screens/auth/VerifyOtp';
import {Home} from '../screens/Home';

const getStackNavigator = (initialRouteName: string) => {
  return createStackNavigator(
    {
      Home: {screen: Home},
      Login: {screen: Login},
      Register: {screen: Register},
      SelectLanguage: {screen: SelectLanguage},
      SelectCountry: {screen: SelectCountry},
      RequestOtp: {screen: RequestOtp},
      VerifyOtp: {screen: VerifyOtp},
    },
    {
      initialRouteName,
      headerMode: 'none',
    },
  );
};

export default getStackNavigator;
