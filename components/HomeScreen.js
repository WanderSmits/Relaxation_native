import React from "react";
import { Text, View, Button } from "react-native";

const HomeScreen = props => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Breathe!
      </Text>
      <Button title="Start Breathing" onPress={props.onGetLocation}/>
    </View>
  );
}

export default HomeScreen
