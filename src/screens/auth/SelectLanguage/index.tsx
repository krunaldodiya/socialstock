import {useMutation, useQuery} from '@apollo/react-hooks';
import React, {Fragment, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from 'react-native-elements';
import {
  EditProfile,
  EditProfileVariables,
} from '../../../generated/EditProfile';
import {GetAuthUser} from '../../../generated/GetAuthUser';
import {
  LoadLanguages,
  LoadLanguages_languages,
} from '../../../generated/LoadLanguages';
import {SET_INITIAL_SCREEN} from '../../../graphql/mutation';
import edit_profile from '../../../graphql/types/mutations/edit_profile';
import get_auth_user from '../../../graphql/types/queries/get_auth_user';
import get_languages from '../../../graphql/types/queries/get_languages';
import screens from '../../../libs/screens';
import {styles} from './style';

const SelectLanguage = (props: any) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const {data: authUser} = useQuery<GetAuthUser, {}>(get_auth_user);

  const {data: languages, loading: loadingLanguages} = useQuery<
    LoadLanguages,
    {}
  >(get_languages, {
    fetchPolicy: 'cache-and-network',
  });

  const [editProfile, {loading}] = useMutation<
    EditProfile,
    EditProfileVariables
  >(edit_profile);

  const [setInitialScreen] = useMutation(SET_INITIAL_SCREEN);

  const setLanguage = async () => {
    try {
      await editProfile({
        variables: {
          language: selectedLanguage,
        },
      });
      await setInitialScreen({variables: {initialScreen: screens.Home}});
      props.navigation.replace(screens.Home);
    } catch (error) {
      console.log(error);
    }
  };

  const keyExtractor = (item: any, index: number) => index.toString();

  const renderItem = (data: {item: LoadLanguages_languages}) => {
    const {item} = data;

    const selectedColor = selectedLanguage == item.shortname ? 'red' : 'black';

    return (
      <TouchableOpacity
        style={styles.language}
        onPress={() => setSelectedLanguage(item.shortname)}>
        <Text
          style={[
            styles.text,
            {
              color: selectedColor,
            },
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  if (!languages && loadingLanguages) {
    return <ActivityIndicator style={{justifyContent: 'center', flex: 1}} />;
  }

  return (
    <Fragment>
      <StatusBar backgroundColor="#0D62A2" barStyle="light-content" />

      <SafeAreaView style={{flex: 1}}>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 22, textAlign: 'center'}}>
            Select Language
          </Text>
        </View>

        <View style={{flex: 1, padding: 10}}>
          <FlatList
            data={languages ? languages.languages : []}
            extraData={authUser}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>

        <View style={{padding: 10}}>
          <Button
            title="Continue"
            onPress={setLanguage}
            loading={loading}
            disabled={loading}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default React.memo(SelectLanguage);
