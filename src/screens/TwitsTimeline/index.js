import React from "react";
import { SafeAreaView, Text } from "react-native";
import { ListItem, Card } from "react-native-elements";
import avatar from "../../../assets/logo.png";

const TwitsTimeline = () => {
  return (
    <>
      <SafeAreaView>
        <Card title="HELLO WORLD">
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
        </Card>
      </SafeAreaView>
    </>
  );
};

export default TwitsTimeline;
