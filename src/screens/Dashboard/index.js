import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Profile from "../Profile";
import TwitsTimeline from "../TwitsTimeline";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const icons = {
  profile: "user-circle",
  search: "search",
  notifications: "bell",
  twits: "twitter",
};

const Dashboard = ({ navigation: { navigate }, auth }) => {
  useEffect(() => {
    !auth.token && navigate("Login");
  }, [auth.token]);
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Icon
                name={icons[route.name.toLowerCase()]}
                size={20}
                color={focused ? "#316287" : "#ccc"}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "#316287",
          inactiveTintColor: "#ccc",
        }}
      >
        <Tab.Screen name="Twits" component={TwitsTimeline} />
        <Tab.Screen name="Search" component={Profile} />
        <Tab.Screen name="Notifications" component={Profile} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Dashboard);
