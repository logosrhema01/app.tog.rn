import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { themeColor } from 'react-native-rapi-ui';
import { Header } from '../components'
import { Home, About, Profile } from '../screens'
import TogDrawer from '../components/TogDrawer';
import { Dimensions } from 'react-native';


const Drawer = createDrawerNavigator();

export default function App() {
  const {width} = Dimensions.get('window');
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: themeColor.primaryTransparent,
        itemStyle: { marginVertical: 10 },
      }}
      drawerStyle={{
        width: width-70
      }}
      drawerContent={props => <TogDrawer {...props} drawerWidth={width-70}/>}
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
  )
}