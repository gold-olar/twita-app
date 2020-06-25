import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Card, Button, Avatar } from "react-native-elements";
import { connect } from "react-redux";
import { logOut } from "../../actions/authActions";

const Profile = (props) => {
  return (
    <>
      <SafeAreaView>
        <Card title="@gold_olar">
          <View
            style={{
              alignItems: "center",
              padding: 15,
            }}
          >
            <Avatar
              rounded
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
              }}
              size="large"
              showAccessory
              onAccessoryPress={() => console.log("Works!")}
            />
          </View>
          <Text style={{ marginBottom: 10, textAlign: "center", padding: 2 }}>
            olargold@gmail.com
          </Text>
          <Text style={{ marginBottom: 10, textAlign: "center", padding: 2 }}>
            A stunning guy with so much money
          </Text>
          <Text style={{ marginBottom: 10, textAlign: "center", padding: 2 }}>
            google.com
          </Text>
          <Text style={{ marginBottom: 10, textAlign: "center", padding: 2 }}>
            Lagos, Ikeja
          </Text>
          <Button onPress={() => props.logOut()} title="Log Out" />
        </Card>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
