import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  console.log("props of Header", props);
  return <Text>{props.title}</Text>;
};
const MyProfile = () => {
  return <Text>MyProfile</Text>;
};
const Division = () => {
  return <Text>Division</Text>;
};
const FriendSection = () => {
  return <Text>FriendSection</Text>;
};

/**
 * @description Functional Component
 */
const Profile = (props) => {
  return <Text>{props.name}</Text>;
};
/**
 * @description Class Component
 */
// class Profile extends React.Component {
//   render() {
//     return <Text>{this.props.name}</Text>;
//   }
// }
const FreindList = () => {
  return (
    <View>
      <Profile name="민호" />
      <Profile name="지연" />
      <Profile name="예지" />
      <Profile name="지연" />
      <Profile name="세인" />
      <Profile name="유림" />
      <Profile name="지현" />
      <Profile name="현서" />
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구" />
      <MyProfile />
      <Division />
      <FriendSection />
      <FreindList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
