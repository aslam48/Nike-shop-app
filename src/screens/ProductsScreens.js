import { StyleSheet, Text, View, FlatList ,Image } from 'react-native'
import React from 'react'
import products from "../data/products";


const ProductsScreens = () => {
  return (
    <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          </View>
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