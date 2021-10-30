import React, { FC, ReactElement, useContext, useMemo, useState } from "react"
import { View, Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
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



const Card = ({item}: {item: { id: string, imgURL: string, text: string, price: number}}) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  return (
    <View key={item.id} style={styles.cardContainer}>
      <Image
        source={{uri: item.imgURL}}
        style={[styles.flexImages, {
          height: randomBool ? 150 : 280,
        }]}
        resizeMode="cover"
      />
      <Text
        style={{
          marginTop: 8,
        }}>
        {item.text}
      </Text>
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
      {/* <TopNav
        height={50}
        middleContent="Home"
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
          <TouchableOpacity onPress={()=>navigation.navigate("MainDrawer")}>
            <Entypo name="menu" size={24} color="black" />
          </TouchableOpacity>
        }
      /> */}
      <SafeAreaView style={backgroundStyle}>
          <ScrollView>
            <Carousel />
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
          <Button style={styles.circle}   
            text="Search"
            status={isDarkmode? "warning": "primary"}
            rightContent={
              <Ionicons name="search" size={20} color={themeColor.white} 
                  />
            }
            onPress={()=>{ navigation.navigate('Search')}}
            />
        </SafeAreaView>
          
    </Layout>
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
    width: 70,
    height: 60,
    borderRadius: 100 / 2,
    position: 'absolute',
    right: 3,
    bottom: 5,
  },
})

