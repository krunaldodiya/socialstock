import React from "react";
import { Icon } from "react-native-elements";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Drawer } from "./focus/drawer";
import { Groups } from "./focus/tabs/groups";
import { Scoreboard } from "./focus/tabs/scoreboard";
import { Timer } from "./focus/tabs/timer";

const FocusTabNavigator = createBottomTabNavigator(
  {
    Groups: {
      screen: Groups,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Icon
            type="ionicons"
            name="person"
            style={{ color: tintColor, fontSize: 28 }}
          />
        )
      }
    },
    Timer: {
      screen: Timer,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Icon
            type="ionicons"
            name="pause"
            style={{ color: tintColor, fontSize: 28 }}
          />
        )
      }
    },
    Scoreboard: {
      screen: Scoreboard,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: any) => (
          <Icon
            type="ionicons"
            name="lock"
            style={{ color: tintColor, fontSize: 28 }}
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
    initialRouteName: "Timer"
  }
);

const HeaderLeft = (props: any) => {
  return (
    <Icon
      type="SimpleLineIcons"
      name="menu"
      style={{ fontSize: 22 }}
      iconStyle={{ marginLeft: 10 }}
      onPress={() => props.navigation.openDrawer()}
    />
  );
};

const HeaderRight = (props: any) => {
  return (
    <Icon
      type="SimpleLineIcons"
      name="lightbulb-outline"
      style={{ fontSize: 22 }}
      iconStyle={{ marginRight: 10 }}
      onPress={() => props.navigation.push("Home")}
    />
  );
};

const FocusStackNavigator = createStackNavigator(
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

export const FocusContainer = createDrawerNavigator(
  {
    Main: FocusStackNavigator
  },
  {
    contentComponent: Drawer
  }
);
