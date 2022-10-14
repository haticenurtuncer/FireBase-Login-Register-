import React from "react";
import { Button, Center, HStack, Input } from "native-base";

const TextInput = ({ maxLength,keyboardType,value,onChangeText,placeholder,onPress,search,onPressFilter,filter,...otherProps}) => {
  return (
    <Center mt={6} {...otherProps}>

          <Input maxLength={ maxLength} keyboardType={keyboardType} h={45} value={value} onChangeText={onChangeText} shadow={1} backgroundColor={'gray.50'}
                 borderRadius={14}
                 w={{
                   base: "90%",
                   md: "25%",
                 }} placeholder={placeholder}/>

    </Center>
  );
};

export default TextInput;
