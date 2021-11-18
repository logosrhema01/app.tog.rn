import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Cart from "../screens/Cart"
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
      <MainStack.Screen name="Cart" component={Cart} />

    </MainStack.Navigator>
  )
}

export default Main
