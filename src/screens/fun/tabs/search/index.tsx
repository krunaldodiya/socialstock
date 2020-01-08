import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Header } from "../../../../../src/components/header";

export const Search = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}>
        <Text>Search</Text>
      </View>
    </SafeAreaView>
  );
};
