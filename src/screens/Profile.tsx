import React from "react"
import { View } from "react-native"
import { MainStackParamList } from "../types/navigation"
import { StackScreenProps } from "@react-navigation/stack"
import { Layout, Text } from "react-native-rapi-ui"

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "MainDrawer">) {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>This is the Profile tab</Text>
      </View>
    </Layout>
  )
}
