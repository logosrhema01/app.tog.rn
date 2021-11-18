import { Entypo } from '@expo/vector-icons'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Image, SafeAreaView } from "react-native"
import { Layout, themeColor, TopNav } from "react-native-rapi-ui"
import { useAppSelector, useAppDispatch } from "../hooks"
import { REMOVE_FROM_CART } from "../redux/CartItems"
import { MainStackParamList } from '../types/navigation'


function Separator() {
    return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
  }

export default function({
    navigation,
    }: StackScreenProps<MainStackParamList, "Cart">
) {
    const cartItems = useAppSelector(state => state)
    const dispatch = useAppDispatch()
  
    const removeItemFromCart = (item: any) =>
      dispatch({
        type: REMOVE_FROM_CART,
        payload: item
      })
    return (
        <Layout>
        <SafeAreaView>
             <TopNav
          height={50}
          middleContent="Cart"
          leftContent={
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Entypo name="chevron-small-left" size={24} color="black" />
            </TouchableOpacity>
          }
        />
         </SafeAreaView>
         <View
          style={{
            flex: 1
          }}>
          {cartItems.length !== 0 ? (
            <FlatList
              data={cartItems}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => Separator()}
              renderItem={({ item }) => (
                  <View style={styles.bookItemContainer}>
                  <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
                  <View style={styles.bookItemMetaContainer}>
                      <Text
                          style={{
                          marginTop: 8,
                          fontWeight: "normal",
                          fontSize: 12,
                          padding: 5
                          }}>
                          {item.text}
                      </Text>
                      <Text
                      style={{
                          fontWeight: "normal",
                          fontSize: 12,
                          marginRight: 10,
                          textDecorationLine: 'line-through'
                      }}>
                      {'GHc'+item.price}
                      
                      </Text>
                      <Text style={{
                          fontWeight: "normal",
                          fontSize: 12,
                          color: themeColor.danger
                      }}>{'GHc'+(item.price*(item.discount/100))}</Text>
                      <View style={styles.buttonContainer}>
                          <TouchableOpacity
                              onPress={() => removeItemFromCart(item)}
                              style={styles.button}>
                              <Text style={styles.buttonText}>Remove -</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                  </View>
            )}  
            />
          ) : (
            <View style={styles.emptyCartContainer}>
              <Text style={styles.emptyCartMessage}>Your cart is empty</Text>
            </View>
      )}
        </View>
      </Layout>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    bookItemContainer: {
      flexDirection: 'row',
      padding: 10
    },
    thumbnail: {
      width: 100,
      height: 150
    },
    bookItemMetaContainer: {
      padding: 5,
      paddingLeft: 10
    },
    textTitle: {
      fontSize: 22,
      fontWeight: '400'
    },
    textAuthor: {
      fontSize: 18,
      fontWeight: '200'
    },
    buttonContainer: {
      position: 'absolute',
      top: 110,
      left: 10
    },
    button: {
      borderRadius: 8,
      backgroundColor: '#ff333390',
      padding: 5
    },
    buttonText: {
      fontSize: 22,
      color: '#fff'
    },
    emptyCartContainer: {
      marginTop: 250,
      justifyContent: 'center',
      alignItems: 'center'
    },
    emptyCartMessage: {
      fontSize: 28
    }
  })
  