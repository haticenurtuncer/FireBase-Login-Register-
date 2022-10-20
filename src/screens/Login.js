import React, { useState } from "react";
import { Alert, SafeAreaView, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Box, Center, Input, Stack, Button as NBButton, Image, Icon, Text } from "native-base";
import Button from "../components/Button/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Home from "./Home";
import GoogleButton from "../components/Button/GoogleButton";
import auth from "@react-native-firebase/auth";
import {
  GoogleSignin
} from '@react-native-google-signin/google-signin';

const Login = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [show, setShow] = useState(false);
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");

 const __signIn = async () => {
    try {

      let response = await auth().signInWithEmailAndPassword(
        UserEmail,
        UserPassword,
      );

      if (response) {
        console.log("res",response);
        navigation.navigate("Home");
        Alert.alert("Successful Login", "Welcome ");
      }
      else{
        Alert.alert("Incorrect Entry", "Check the username and password. ");
      }
    } catch (e) {
      console.error(e.message);
      Alert.alert(
        "Hata",
        "Kullanıcı adı veya şifre hatalı.",
        [
          {
            text: "Tamam",

          },
        ],
      );
    }


  };
GoogleSignin.configure({
  webClientId:'805240146352-drq3gk9vu4jiuq670nenrapcb4ui7r4q.apps.googleusercontent.com',
});
 const signInWithGoogleAsync=async ()=>{
    const {idToken} =await  GoogleSignin.signIn();
    const googleCredantial =auth.GoogleAuthProvider.credential(idToken);
    const user_sign_in =auth().signInWithCredential(googleCredantial);
    navigation.navigate("Home");
    user_sign_in.then((user)=>{
      console.log(user);
    }).catch((error)=>{
      console.log("errr",error);
    })
 }


  return (
    <SafeAreaView style={{ flex: 1, marginTop: insets.top, backgroundColor: "white" }}>
      <KeyboardAwareScrollView>
        <Box alignItems="center">
          <Image
            source={require("../assets/images/logo.png")}
            alt="HNT"
            size={300}
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
            placeholder="Kullanıcı Adı"
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
        </Stack>
        <Center mx={6} space={4} alignItems="center">
          <Button mt={10} blue title={"Giriş Yap"}  onPress={() => __signIn()} />


          <GoogleButton title={"Google ile giriş yap"} onPress={signInWithGoogleAsync} />
          <TouchableOpacity

            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text mt={5}>Kayıt olmak için <Text bold>tıklayınız.</Text></Text>
          </TouchableOpacity>
        </Center>

      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
