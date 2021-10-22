import { StatusBar } from "expo-status-bar"
import React from "react"
import { ThemeProvider } from "react-native-rapi-ui"
import Navigation from "./src/navigation"
import { AuthProvider } from "./src/provider/AuthProvider"

export default function App() {
  const images = [
    require("./assets/images/togls.png")
  ] 
  return (
    <ThemeProvider images={images}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
      <StatusBar />
    </ThemeProvider>
  )
}
