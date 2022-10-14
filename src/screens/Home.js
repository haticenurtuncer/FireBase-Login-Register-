import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header/Header";
const Home = () => {
  return (
    <>
    <Header title={'Anasayfa'}/>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View></>
  );
};

export default Home;
