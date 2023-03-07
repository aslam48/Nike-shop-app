import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import cart from '../data/cart'
import CartListItem from '../component/CartListItem'

const ShoppingCart = () => {
  return (
    <View>
    <FlatList
      data={cart}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      ListFooterComponent={() => (
        <View style={styles.totalsContainer}>
          <view style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>410,00 US$</Text>
          </view>

          <view style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>410,00 US$</Text>
          </view>

          <view style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>410,00 US$</Text>
          </view>
        </View>
      )}
    />
    </View>
  )
}

export default ShoppingCart

const styles = StyleSheet.create({
  totalsContainer: {
    padding:20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderWidth: 1
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2
  },

  text: {
    fontSize: 16,
    color: "gray"
  },
  textBold: {
    fontSize: 16,
    color: "gray",
    fontFamily: "500"
  }
})

