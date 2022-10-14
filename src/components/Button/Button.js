import React from 'react';
import {Box, Center, Text} from "native-base";
import { ActivityIndicator, TouchableOpacity } from "react-native";

const Button = ({loading,title, onPress,outline,blue, ...otherProps}) => {
  return (
    <Box {...otherProps} w={'100%'} h={50} borderRadius={19} bg={outline?'white': blue ?'blue.800':'blue.700'} borderWidth={outline && 2} borderColor={outline && 'primary.600'} justifyContent={'center'}>
      <TouchableOpacity onPress={onPress} style={{flexDirection:'row'}} >
        <Text flex={1} fontWeight={600} fontSize={'md'} fontFamily={'Poppins-Bold'} color={outline?'primary.600':'white'} textAlign={'center'}>{title}</Text>
        {
          loading &&
          <ActivityIndicator style={{paddingRight:15}} color={'#ffffff'} size={'small'}/>
        }
      </TouchableOpacity>
    </Box>
  );
};

export default Button;
