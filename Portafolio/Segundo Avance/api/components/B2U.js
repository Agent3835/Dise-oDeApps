/** @format */

import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

export default function B2U() {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setResponse(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

  const getContent = () => {
    if (isLoading) {
      return (
        <View>
          <Text style={styles.textProps}>Loading data...</Text>
          <ActivityIndicator
            size='large'
            color='#61dafb'
          />
        </View>
      );
    }

    if (error) {
      return <Text>Error</Text>;
    }

    return (
      <View>
        <Text style={styles.textProps}>
          BTC to USD: $ {response && response["bpi"]["USD"]["rate"]}
        </Text>
      </View>
    );
  };

  return <View>{getContent()}</View>;
}

const styles = StyleSheet.create({
  textProps: {
    color: "blue",
    fontSize: 30,
  },
});
