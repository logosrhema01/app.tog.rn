import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import SecondScreen from "../screens/SecondScreen"
import Home from "../screens/Home"
import MainDrawer from "./MainDrawer"
import Search from "../screens/Search"

const MainStack = createStackNavigator()
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen 
        name="MainDrawer"
        component={MainDrawer} />
      <MainStack.Screen 
        name="Search"
        component={Search} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />

    </MainStack.Navigator>
  )
}

export default Main
