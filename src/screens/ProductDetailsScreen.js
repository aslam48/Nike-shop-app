import { StyleSheet, View, FlatList, useWindowDimensions, Image} from "react-native";
import products from "../data/products";

const ProductDetailsScreen = () => {
  const product = products[0];

  const {width} = useWindowDimensions()
  return (
    <View>
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

      {/* Title */}

      {/* Price */}

      {/* Description */}

      {/* Add to cart button */}

      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductDetailsScreen;
