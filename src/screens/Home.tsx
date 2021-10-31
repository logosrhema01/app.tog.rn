import React, { FC, ReactElement, useContext, useMemo, useState } from "react"
import { View, Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { MainStackParamList } from "../types/navigation"
import { supabase } from "../initSupabase"
import Carousel from '../components/utils/Carousel'
import { data } from './utils/mock'
import {
  Layout,
  Button,
  Text,
  Section,
  TopNav,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui"
import MasonryList from '@react-native-seoul/masonry-list';
import { AuthContext } from "../provider/AuthProvider"
import { Entypo, Ionicons } from "@expo/vector-icons"
import moveToBottom from "../components/utils/MoveToBottom"
import { TouchableHighlight } from "react-native-gesture-handler"



const Card = ({item}: {item: { id: string, imgURL: string, text: string, price: number, discount: number}}) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  return (
    <View key={item.id} style={styles.cardContainer}>
      <ImageBackground source={{uri: item.imgURL}} style={[styles.imageBackground, {
          height: randomBool ? 150 : 280,
        }]}>
          <View style={[styles.rightContainer]}>
           <Ionicons name="ios-heart-outline" color="red" size={24} onPress={()=>console.log('saved')}/> 
          </View>
          <View style={[styles.leftContainer]}>
           <Ionicons name="ios-add-circle" color="red" size={30} onPress={()=>console.log('added')}/> 
          </View>
        </ImageBackground>
      <Text
        style={{
          marginTop: 8,
          fontWeight: "normal",
          fontSize: 12,
          padding: 5
        }}>
        {item.text}
      </Text>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Text
          style={{
            fontWeight: "normal",
            fontSize: 12,
            marginRight: 10,
            textDecorationLine: 'line-through'
          }}>
          {'GHc'+item.price}
          
        </Text>
        <Text style={{
            fontWeight: "normal",
            fontSize: 12,
            color: themeColor.danger
          }}>{'GHc'+(item.price*(item.discount/100))}</Text>
      </View>
      
    </View>
  );
};

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "MainDrawer">) {
  const auth = useContext(AuthContext)
  const { isDarkmode, setTheme } = useTheme()

  const renderItem = ({
    item,
    index
  }: {
    item: any;
    index?: number;
  }): ReactElement => {
    return <Card item={item} key={index} />;
  };
  const backgroundStyle = {
    backgroundColor: isDarkmode ? themeColor.dark : themeColor.white,
    flex: 1,
  };

  
  return (
    <Layout>
      <SafeAreaView style={backgroundStyle}>
          <ScrollView>
            {/* <Carousel /> */}
            <MasonryList
              contentContainerStyle={{
                paddingHorizontal: 24,
                alignSelf: 'stretch',
              }}
              numColumns={2}
              data={data}
              key={data.length}
              renderItem={renderItem}
            />
            
          </ScrollView>
          <TouchableOpacity style={styles.circle}   
            onPress={()=>{ navigation.navigate('Search')}}
          >
            <Ionicons 
              name="ios-search-circle" 
              size={80} 
              color={isDarkmode? themeColor.warning:themeColor.primary900} style={{ paddingLeft: 0}} />
          </TouchableOpacity>
        </SafeAreaView>
          
    </Layout>
  )
}


const styles = StyleSheet.create({
  cardContainer : {marginTop: 12, flex: 1, borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'white',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    position: 'absolute',
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',
    borderWidth: 5,
    borderColor: 'white',
  },
  rightContainer: {
    marginLeft: 'auto',
    marginRight: -2,
    padding: 3,
    marginTop: 3,
    height: 30
  },
  leftContainer: {
    marginRight: 'auto',
    marginLeft: -2,
    position: "absolute", bottom: 0, right: 0
  },
  lowerContainer: {
    flex: 1,
    margin: 10,
  }
})

