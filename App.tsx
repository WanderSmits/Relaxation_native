import React from "react";
import { View, Text} from "react-native";
import HomeScreen from "./components/HomeScreen"


export default class App extends React.Component {

  startBreathe = () => {
    console.log("Breathing...")
  }

render() {
  return (
    <View style={{ height: "100%" }}>
      <Text>Home</Text>
      <HomeScreen onGetLocation={this.startBreathe} />
    </View>
  );
}
}