import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TopNav  } from 'react-native-rapi-ui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '../hooks'

export default function Header(props: { headerName: string}){
  const navigation = useNavigation();
  const cartItems = useAppSelector(state => state)

   return(
       <SafeAreaView>
           <TopNav
        height={50}
        middleContent={props.headerName}
        rightContent={
          <TouchableOpacity
            style={styles.button}>
            <View style={styles.itemCountContainer}>
              <Text style={styles.itemCountText}>{cartItems.reduce((total,item)=>{
                return total+item.count
                },0)}</Text>
            </View>
            <Ionicons name='ios-cart' size={24} color='#101010' style={{ paddingRight: 10 }} />
          </TouchableOpacity>
        }
        rightAction={() => {
          navigation.navigate('Cart')
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


const styles = StyleSheet.create({
  button: {
    marginRight: 0,
  },

  itemCountContainer: {
    position: 'absolute',
    borderRadius: 20,
    right: 22,
    bottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
  },
  itemCountText: {
    color: 'red',
    fontWeight: 'bold'
  }
})
