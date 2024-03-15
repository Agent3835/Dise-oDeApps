/** @format */

import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";

const url = "https://fakestoreapi.com/products";

useState;

export default function Products() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoading(false);
          setData(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

  // console.log(data);

  const getContent = () => {
    if (isLoading) {
      return (
        <View>
          <Text style={styles.textSize}>Loading Data</Text>
          <ActivityIndicator
            size='large'
            color='red'
          />
        </View>
      );
    }
    if (error) {
      return <Text style={styles.textSize}>Error: {error}</Text>;
    }

    return (
      <View style={styles.flatListContainer}>
        <FlatList
          showsVerticalScrollIndicator={true}
          data={data}
          renderItem={({ item }) => (
            <View>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />
              <Text>Name: {item.title}</Text>
            </View>
          )}
        />
      </View>
    );
  };

  return <View>{getContent()}</View>;
}

const styles = StyleSheet.create({
  textSize: {
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  flatListContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
