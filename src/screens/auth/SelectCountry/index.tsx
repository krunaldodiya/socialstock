import {useMutation, useQuery} from '@apollo/react-hooks';
import React, {Fragment, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  LoadCountries,
  LoadCountries_countries,
} from '../../../generated/LoadCountries';
import {SET_SELECTED_COUNTRY} from '../../../graphql/mutation';
import load_countries from '../../../graphql/types/queries/load_countries';

const SelectCountry = (props: any) => {
  const [keywords, setKeywords] = useState('');

  const {data: countries, loading: loadingCountries} = useQuery<
    LoadCountries,
    {}
  >(load_countries, {
    fetchPolicy: 'cache-and-network',
  });

  const [setSelectedCountry] = useMutation(SET_SELECTED_COUNTRY);

  const handleSetSelectedCountry = async (item: any) => {
    try {
      await setSelectedCountry({
        variables: {
          country: item,
        },
      });

      props.navigation.pop();
    } catch (error) {
      console.log(error);
    }
  };

  const getFilteredCountries = () => {
    const data = countries ? countries.countries : [];

    return keywords.length >= 3
      ? data.filter((country: any) => {
          return country.name.match(new RegExp(`^${keywords}`, 'gi'));
        })
      : data;
  };

  const renderItem = (data: {item: LoadCountries_countries}) => {
    const {item} = data;

    return (
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => {
          handleSetSelectedCountry(item);
        }}>
        <Text style={{color: '#000'}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const keyExtractor = (item: any, index: number) => index.toString();
  const ItemSeparatorComponent = () => (
    <View style={{height: 1, backgroundColor: '#ccc'}} />
  );

  if (!countries && loadingCountries) {
    return <ActivityIndicator style={{justifyContent: 'center', flex: 1}} />;
  }

  return (
    <Fragment>
      <StatusBar backgroundColor="#0D62A2" barStyle="light-content" />

      <SafeAreaView style={{flex: 1}}>
        <View
          style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
          <TextInput
            placeholder="Filter Country"
            value={keywords}
            onChangeText={value => setKeywords(value)}
          />

          <FlatList
            keyboardShouldPersistTaps="handled"
            keyExtractor={keyExtractor}
            data={getFilteredCountries()}
            ItemSeparatorComponent={ItemSeparatorComponent}
            renderItem={renderItem}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default React.memo(SelectCountry);
