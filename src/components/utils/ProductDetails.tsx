import React, { useState } from "react"
import { Dimensions, ImageBackground, View } from "react-native"
import { TouchableHighlight } from "react-native-gesture-handler";
import RNPickerSelect, { Item } from 'react-native-picker-select';
import { Button, Text, themeColor, useTheme } from "react-native-rapi-ui"
import { useAppDispatch } from "../../hooks"
import { ADD_TO_CART } from "../../redux/CartItems"


export default ({ item }: { item:{ id: string, 
  imgURL: string, 
  text: string, 
  price: number, 
  discount: number,
  colors: string[],
  sizes: string[],
  reviews: any[],
  promo_message: string
}}) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const dispatch = useAppDispatch()
  const addItemToCart = (item: any) => dispatch({ type: ADD_TO_CART, payload: item })

  return (
    <View>
      <ImageBackground source={{uri: item.imgURL}} style={{
          width: Dimensions.get('screen').width - 50,
          height: 200
        }}/>
       <Text
        style={{
          marginTop: 8,
          fontWeight: "normal",
          fontSize: 12,
          padding: 5
        }}>
        {item.text}
      </Text>
      <View style={{flexDirection: 'row', padding: 5}}>
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
            
      </View>
      <View style={{flexDirection: 'row', padding: 5}}>
        <View style={{ flexDirection: 'row', marginRight: 10}}>
          <Text style={{
              fontWeight: "bold",
              fontSize: 18,
            }}>Color: </Text>
          <RNPickerSelect
                onValueChange={(value: any) => setSelectedColor(value)}
                items={item.colors.map(color=> {return { label: color, value: color}})}
            />
        </View>
        <View style={{ flexDirection: 'row'}}>
          <Text style={{
            fontWeight: "bold",
            fontSize: 18,
          }}>Size: </Text>
          <RNPickerSelect
                onValueChange={(value: any) => setSelectedSize(value)}
                items={item.sizes.map(color=> {return { label: color, value: color}})}
            />
        </View>
      </View>
      <View>
        <Button
          text={"Add To Cart"}
          onPress={() => {
            addItemToCart({...item, color: selectedColor, size: selectedSize})
          }}
          style={{
            marginTop: 20,
            
          }}
        />
        <Button
          text={"Checkout"}
          onPress={() => {
            // addItemToCart(item)
          }}
          style={{
            marginTop: 1,
          }}
          color={themeColor.danger}
        />
      </View>
      <View style={{ alignItems: 'center'
        ,justifyContent: 'center', marginTop: 20}}>
        <Text style={{fontWeight: "bold"}}>Reviews</Text>
        {
          item.reviews.map(review=>(
            <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', margin: 10, padding: 10, borderColor: themeColor.primary, borderWidth: 1}}>
              <Text style={{ alignSelf: 'flex-start'}}>{review.name}</Text>
              <Text style={{ fontStyle: 'italic', fontWeight: '600'}}>{review.message}</Text>
              <Text>{review.rate}</Text>
            </View>
          ))
        }
        
      </View>
      
      
    </View>
  )
}
