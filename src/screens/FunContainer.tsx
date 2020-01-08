import React from "react";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Feeds } from "./fun/tabs/feeds";
import { Search } from "./fun/tabs/search";
import { Bazaar } from "./fun/tabs/bazaar";
import { Conversation } from "./fun/tabs/conversation";
import { Notifications } from "./fun/tabs/notifications";

const FocusTabNavigator = createBottomTabNavigator(
  {
    Feeds: {
      screen: Feeds,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Icon
            type="SimpleLineIcons"
            name="grid-on"
            style={{ color: tintColor, fontSize: 36 }}
          />
        )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Icon
            type="SimpleLineIcons"
            name="search"
            style={{ color: tintColor, fontSize: 36 }}
          />
        )
      }
    },
    Bazaar: {
      screen: Bazaar,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Icon
            type="SimpleLineIcons"
            name="shop"
            style={{ color: tintColor, fontSize: 36 }}
          />
        )
      }
    },
    Conversation: {
      screen: Conversation,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Icon
            type="Entypo"
            name="chat"
            style={{ color: tintColor, fontSize: 36 }}
          />
        )
      }
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Icon
            type="SimpleLineIcons"
            name="favorite"
            style={{ color: tintColor, fontSize: 36 }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: true,
      activeTintColor: "red"
    },
    initialRouteName: "Bazaar"
  }
);

const HeaderLeft = (props: any) => {
  return (
    <Icon
      type="SimpleLineIcons"
      name="add-a-photo"
      style={{ fontSize: 22 }}
      iconStyle={{ marginLeft: 10 }}
      onPress={() => console.log("create post")}
    />
  );
};

const HeaderRight = (props: any) => {
  return (
    <Icon
      type="SimpleLineIcons"
      name="person"
      style={{ fontSize: 22 }}
      iconStyle={{ marginRight: 10 }}
      onPress={() => props.navigation.push("Home")}
    />
  );
};

export const FunContainer = createStackNavigator(
  {
    FocusTabNavigator
  },
  {
    headerLayoutPreset: "center",
    cardStyle: { flex: 1 },
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: <HeaderLeft navigation={navigation} />,
        title: navigation.state.routes[navigation.state.index].routeName,
        headerRight: <HeaderRight navigation={navigation} />
      };
    }
  }
);
