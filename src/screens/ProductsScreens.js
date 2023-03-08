import { StyleSheet, Text, View, FlatList ,Image, Pressable } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productsSlice } from '../store/productSlice'


const ProductsScreens = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  return (
    <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable 
          onPress={() => {
            dispatch(productsSlice.actions.selectedProduct(item.id));
           navigation.navigate('Product Details')}} style={styles.itemContainer}>
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