import {createStackNavigator} from 'react-navigation-stack';

import {Login} from '../screens/auth/Login';
import {Register} from '../screens/auth/Register';
import {RequestOtp} from '../screens/auth/RequestOtp';
import SelectCountry from '../screens/auth/SelectCountry';
import SelectLanguage from '../screens/auth/SelectLanguage';
import {VerifyOtp} from '../screens/auth/VerifyOtp';
import {Home} from '../screens/Home';
import SearchUsers from '../screens/users/Search';
import ViewProfile from '../screens/users/ViewProfile';
import {EditProfile} from '../screens/users/EditProfile';
import Chat from '../screens/chat';
import GroupInfo from '../screens/group/info';

import {SelectLan} from '../screens/SelectLan';

import { Search } from 'src/screens/fun/tabs/search';
import MyProfile from '../screens/users/ViewProfile/myprofile'

import {InviteFriends}  from '../screens/users/Friend';

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
      SelLanguage: {screen: SelectLan},
      MyProfile : {screen : MyProfile},
      InviteFriend : {screen: InviteFriends},
    },
    {
      initialRouteName : 'RequestOtp',
      headerMode: 'none',
    },
  );
};

export default getStackNavigator;
