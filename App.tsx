import { StatusBar } from "expo-status-bar"
import React from "react"
import { ThemeProvider } from "react-native-rapi-ui"
import Navigation from "./src/navigation"
import { AuthProvider } from "./src/provider/AuthProvider"
import { Provider as StoreProvider } from 'react-redux'
import store from './src/redux/store'

export default function App() {
  const images = [
    require("./assets/images/togls.png")
  ] 
  return (
    <StoreProvider store={store}>
      <ThemeProvider images={images}>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
        <StatusBar />
      </ThemeProvider>
    </StoreProvider>
  )
}
