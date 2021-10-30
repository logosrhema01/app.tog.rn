import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import About from '../screens/About';
import Profile from '../screens/Profile';
import Header from '../components/Header';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator 
      drawerType="front"
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 10 },
      }}
     
    >
        <Drawer.Screen 
          name="Home"
          component={Home}
          options={{
            headerShown:true,
            header: () => {
              
              return (
                <Header headerName="Home"/>
              );
            }
          }}
        />
     <Drawer.Screen 
          name="About"
          component={About}
          options={{
            headerShown:true,
            header: () => {
              
              return (
                <Header headerName="About"/>
              );
            }
          }}
      />
      <Drawer.Screen 
          name="Profile"
          component={Profile}
          options={{
            headerShown:true,
            header: () => {
              
            
              return (
                <Header headerName="Profile"/>
              );
            }
          }}
      />
    </Drawer.Navigator>
  );
}