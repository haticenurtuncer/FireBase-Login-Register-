import React from 'react';
import { Text, Button, Box, Icon } from "native-base";
import {useNavigation} from '@react-navigation/native'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from "react-native";
import styles from "./Header.styles";
const Header = ({title,menu}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation()

  return (
    <Box bg="primary.50" style={[styles.container,{paddingTop: Platform.OS==='android' ?insets.top+10 :insets.top}]}>
      <Box style={styles.titleView}>
        <Button
          onPress={() => {
            if(menu){
              navigation.openDrawer()
            }else{
              navigation.pop()
            }
          }}
          style={styles.button}
        >
          <Icon name={menu?'menu':'arrow-left'} size={25} color={'red.500'}/>
        </Button>
        <Text fontWeight={600} color="primary.600"  style={styles.title}>{title}</Text>
      </Box>
    </Box>
  )
}

export default Header
