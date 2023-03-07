import { StyleSheet, Text, View, FlatList, Pressable} from 'react-native'
import React from 'react'
import cart from '../data/cart'
// import CartListItem from '../component/CartListItem'


const ShoppingCartTotals = () => (
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
)


const ShoppingCart = () => {
  return (
    <>
    {/* <FlatList
      data={cart}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      ListFooterComponent={ShoppingCartTotals}
    /> */}



      <Pressable  style={styles.button}>
        <Text style={styles.buttonText}>Check out</Text>
      </Pressable>

    </>
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
  },
  button: {
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "black",
    padding: 20,
    borderRadius: 100,
    alignItems: "center"
},

buttonText: {
    color: "white",
    fontSize:"500",
    fontSize: 16,
}
})

