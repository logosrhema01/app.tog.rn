import React, { FC, ReactElement, useContext, useMemo, useState } from "react"
import { View, Image, SafeAreaView } from "react-native"
import { MainStackParamList } from "../types/navigation"
import { StackScreenProps } from "@react-navigation/stack"
import { supabase } from "../initSupabase"
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
import { HeaderClassicSearchBar } from "react-native-header-search-bar"
import MasonryList from '@react-native-seoul/masonry-list';
import { AuthContext } from "../provider/AuthProvider"



const Card = ({item}) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  console.log(item)
  return (
    <View key={item.id} style={{marginTop: 12, flex: 1}}>
      <Image
        source={{uri: item.imgURL}}
        style={{
          height: randomBool ? 150 : 280,
          alignSelf: 'stretch',
        }}
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
}: StackScreenProps<MainStackParamList, "MainTabs">) {
  const [searchText, setSearchText] = useState("")
  const auth = useContext(AuthContext)
  const { isDarkmode, setTheme } = useTheme()

  const renderItem = ({
    item,
  }: {
    item: any;
    index?: number;
  }): ReactElement => {
    return <Card item={item} />;
  };
  const backgroundStyle = {
    backgroundColor: isDarkmode ? themeColor.dark : themeColor.white,
    flex: 1,
  };

  const handleSearchInput = (text: string) => {
    setSearchText(text)
  }
  return (
    <Layout>
      {/* <TopNav
        height={40}
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
      /> */}
      <HeaderClassicSearchBar 
        backgroundColor={isDarkmode ? themeColor.dark100 : themeColor.white200} 
        style={{
          margin: 0,
        }}
        onChangeText={handleSearchInput}
        value={searchText} />
      
      <SafeAreaView style={backgroundStyle}>
      <MasonryList
        contentContainerStyle={{
          paddingHorizontal: 24,
          alignSelf: 'stretch',
        }}
        numColumns={2}
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
    </Layout>
  )
}