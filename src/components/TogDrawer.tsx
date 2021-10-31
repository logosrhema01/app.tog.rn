import * as React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { supabase } from '../initSupabase';
import { Button } from 'react-native-rapi-ui';
import { Dimensions, View, Image, StyleSheet } from 'react-native';

export default function CustomDrawerContent(props: any) {

    return (
      <DrawerContentScrollView {...props}>
        <View style={{
            padding: 0
        }}>
            <Image
                resizeMode="cover"
                style={{
                    width: props.drawerWidth,
                    height: 250
                }}
                source={require("../../assets/images/togblue.jpg")}
            />
        </View>
        <DrawerItemList {...props} />
        <View style={{
            paddingHorizontal: props.drawerWidth/4
        }}>
            <Button
              status="danger"
              text="Logout"
              width={props.drawerWidth/2}
              onPress={async () => {
                const { error } = await supabase.auth.signOut()
                if (!error) {
                  alert("Signed out!")
                }
                if (error) {
                  alert(error.message)
                }
              }}
              style={{
                marginTop: 100,
              }}
            />
        </View>
      </DrawerContentScrollView>
    )
}
const styles = StyleSheet.create({
    flexImages: {
      alignSelf: 'stretch',
      borderWidth: 2,
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      borderColor: 'white',
    },
    cardContainer : {marginTop: 12, flex: 1, borderWidth: 2,
      backgroundColor: 'white',
      borderRadius: 5,
      borderColor: 'white',
    },
    circle: {
      width: 65,
      height: 65,
      borderRadius: 50,
      position: 'absolute',
      right: 10,
      bottom: 10,
      justifyContent: 'center',
      paddingLeft: 10,
    },
  })