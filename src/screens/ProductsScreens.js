import { StyleSheet, Text, View, FlatList ,Image, Pressable } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React from 'react'
import products from "../data/products";


const ProductsScreens = () => {
  const navigation = useNavigation()
  return (
    <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable 
          onPress={() => navigation.navigate('Product Details')} style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        )}
        numColumns={2}
      />

  )
}

export default ProductsScreens

const styles = StyleSheet.create({
    itemContainer: {
        width: "50%",
        padding: 1,
      },
    
      image: {
        width: "100%",
        aspectRatio: 1,
      },
})