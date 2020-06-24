import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Profile from "../Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const icons = {
  profile: "user-circle",
  search: "search",
  notifications: "bell",
  twits: "twitter",
};

const Dashboard = () => {
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
        <Tab.Screen name="Twits" component={Profile} />
        <Tab.Screen name="Search" component={Profile} />
        <Tab.Screen name="Notifications" component={Profile} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </>
  );
};

export default Dashboard;
