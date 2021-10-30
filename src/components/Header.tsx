import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TopNav, themeColor, useTheme } from 'react-native-rapi-ui';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header(props: { headerName: string}){
  const navigation = useNavigation();
  const { isDarkmode, setTheme } = useTheme()

   return(
       <SafeAreaView>
           <TopNav
        height={50}
        middleContent={props.headerName}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light")
          } else {
            setTheme("dark")
          }
        }}
        leftContent={
          <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Entypo name="menu" size={24} color="black" />
          </TouchableOpacity>
        }
      />
       </SafeAreaView>
        
   ) 
}
