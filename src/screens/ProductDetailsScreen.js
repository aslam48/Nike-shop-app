import { createSlice } from "@reduxjs/toolkit";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  useWindowDimensions,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
const dispatch = useDispatch()

  const { width } = useWindowDimensions();

  const addToCart = () => {
    dispatch(createSlice.actions.addCartItem({product}))
  };


  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}

        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Add to cart button */}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>

      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },

  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },

  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },

  button: {
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "black",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: "500",
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
