import {createStackNavigator} from 'react-navigation-stack';

import {Login} from '../screens/auth/Login';
import {Register} from '../screens/auth/Register';
import {RequestOtp} from '../screens/auth/RequestOtp';
import SelectCountry from '../screens/auth/SelectCountry';
import SelectLanguage from '../screens/auth/SelectLanguage';
import {VerifyOtp} from '../screens/auth/VerifyOtp';
import {Home} from '../screens/Home';
import SearchUsers from 'src/screens/users/Search';
import ViewProfile from 'src/screens/users/ViewProfile';
import EditProfile from 'src/screens/users/EditProfile';
import Chat from 'src/screens/chat';
import GroupInfo from 'src/screens/group/info';

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
      SearchUsers: {screen: SearchUsers},
      ViewProfile: {screen: ViewProfile},
      EditProfile: {screen: EditProfile},
      Chat: {screen: Chat},
      GroupInfo: {screen: GroupInfo},
    },
    {
      initialRouteName,
      headerMode: 'none',
    },
  );
};

export default getStackNavigator;
