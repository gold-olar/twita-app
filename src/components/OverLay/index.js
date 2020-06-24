import React, { useState } from "react";
import { Button, Overlay } from "react-native-elements";
import { Text, View, StyleSheet } from "react-native";

const Modal = ({ visible, setVisible, message }) => {
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={styles.modal}> {message} </Text>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    padding: 40,
    textAlign: "center",
  },
});

export default Modal;
