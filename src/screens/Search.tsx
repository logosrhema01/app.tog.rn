import React, { useState } from "react"
import { View } from "react-native"
import { supabase } from "../initSupabase"
import { MainStackParamList } from "../types/navigation"
import { StackScreenProps } from "@react-navigation/stack"
import { Layout, Text, Button, useTheme, themeColor } from "react-native-rapi-ui"
import { HeaderClassicSearchBar } from "react-native-header-search-bar"


export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "Search">) {
  const [searchText, setSearchText] = useState("")
  const { isDarkmode, setTheme } = useTheme()
  const handleSearchInput = (text: string) => {
    setSearchText(text)
  }
  return (
    <Layout>
      <HeaderClassicSearchBar 
        backgroundColor={isDarkmode ? themeColor.dark100 : themeColor.white200} 
        style={{
          margin: 0,
        }}
        onChangeText={handleSearchInput}
        value={searchText} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
    
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
            </Text>
            <Button
              status="primary"
              text="Home"
              onPress={() => {
                navigation.navigate("Home")
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              status="danger"
              text="Logout"
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
                marginTop: 10,
              }}
            />
      </View>
    </Layout>
  )
}
