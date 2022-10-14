import React from 'react';
import { Box, Center, Image, Text } from "native-base";
import { ActivityIndicator, TouchableOpacity } from "react-native";

const GoogleButton = ({loading,title, onPress,outline,blue, ...otherProps}) => {
  return (
    <Box {...otherProps}mt={3} w={'100%'} h={50}  bg={"tertiary.400"} borderRadius={19}>
      <TouchableOpacity onPress={onPress} style={{flexDirection:'row'}} >
        <Image marginX={5} marginY={1} size={9}
               source={require("../../assets/images/google.png")}
        />
        <Text marginY={3} marginX={7} fontWeight={600} fontSize={'md'} fontFamily={'Poppins-Bold'} color={outline?'primary.600':'white'} textAlign={'center'}>{title}</Text>
        {
          loading &&
          <ActivityIndicator style={{paddingRight:15}} color={'#ffffff'} size={'small'}/>
        }
      </TouchableOpacity>
    </Box>

  );
};

export default GoogleButton;
