import React, { useState } from "react";
import { Alert, SafeAreaView, TouchableOpacity } from "react-native";
import { Box, Center, Input, Stack, Button as NBButton, Image, Icon, Text } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../components/Button/Button";
import auth from "@react-native-firebase/auth";

const Register = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [password1, setPassword1] = useState("");
  const [show, setShow] = useState(false);
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");

  const __doSignUp = () => {
    if (!UserEmail) {
      Alert.alert("Error", "Email required *");
      return;
    } else if (
      !UserPassword &&
      UserPassword.trim() &&
      UserPassword.length > 6
    ) {
      Alert.alert("Error", "Weak password, minimum 6 chars");
      return;
    } else {
      __doCreateUser(UserEmail, UserPassword);
      return;
    }
  };
  const __doCreateUser = async () => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        UserEmail,
        UserPassword,
      );
      if (response) {
        console.log(response);
        Alert.alert("Successful Register", "Welcome the React Native");
      }
    } catch (e) {
      console.error(e.message);
      Alert.alert(
        "Hata",
        e.message,
        [
          {
            text: "Tamam",

            onPress: () => navigation.navigate("Login")
          },
        ],
      );
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, marginTop: insets.top, backgroundColor: "white" }}>
      <Box alignItems="center">
        <Image
          source={require("../assets/images/logo.png")}
          alt="HNT"
          size={200}
          resizeMode="contain"

        />
      </Box>
      <Stack space={4} w="100%" alignItems="center">
        <Input
          value={UserEmail}
          onChangeText={setUserEmail}
          w={{
            base: "86%",
            md: "25%",
          }}
          h={50}
          fontSize={15}
          fontWeight={400}
          fontStyle="normal"
          color={"black"}
          p={3}
          placeholder="E-mail "
          borderRadius={13}
        />

        <Input
          value={UserPassword}
          onChangeText={setUserPassword}
          w={{
            base: "86%",
            md: "25%",
          }}
          h={50}
          fontSize={15}
          fontWeight={400}
          fontStyle="normal"
          color={"black"}
          type={show ? "text" : "password"}
          placeholder="Parola"
          borderRadius={13}
        />
        <Input
          value={password1}
          onChangeText={setPassword1}
          w={{
            base: "86%",
            md: "25%",
          }}
          h={50}
          fontSize={15}
          fontWeight={400}
          fontStyle="normal"
          color={"black"}
          type={show ? "text" : "password"}
          placeholder="Parola Tekrar"
          borderRadius={13}
        />

      </Stack>
      <Center mx={6} space={4} alignItems="center">


          <Button mt={10} blue title={"Kayıt Ol"} onPress={() => __doSignUp()}
          />
          <TouchableOpacity

            onPress={() => {
              navigation.navigate("Login");
            }}
          >

            <Text mt={5}>Giriş yapmak için <Text bold>tıklayınız.</Text></Text>
          </TouchableOpacity>

        </Center>

    </SafeAreaView>
  );
};

export default Register;
