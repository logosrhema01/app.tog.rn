import React from "react"
import { View } from "react-native"
import { supabase } from "../initSupabase"
import { MainStackParamList } from "../types/navigation"
import { StackScreenProps } from "@react-navigation/stack"
import { Layout, Text, Button } from "react-native-rapi-ui"

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "MainTabs">) {
  return (
    <Layout>
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
