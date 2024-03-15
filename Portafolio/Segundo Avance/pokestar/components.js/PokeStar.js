/** @format */

import React from "react";
import { useState, useEffect } from "react";
import { DataTable, ActivityIndicator } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-web";

const url = "https://swapi.py4e.com/api/people";

export default function PokeStar() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.results);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  console.log(error);

  const getContent = () => {
    if (isLoading) {
      return (
        <View>
          <ActivityIndicator
            size='large'
            color='green'
          />
        </View>
      );
    }
    if (error) {
      return (
        <View>
          <Text>Error</Text>
        </View>
      );
    }

    return (
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Height</DataTable.Title>
            <DataTable.Title>Weight</DataTable.Title>
            <DataTable.Title>Created</DataTable.Title>
            <DataTable.Title>Edited</DataTable.Title>
          </DataTable.Header>

          <FlatList
            data={data}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <DataTable.Row>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell>{item.height}</DataTable.Cell>
                <DataTable.Cell>{item.mass}</DataTable.Cell>
                <DataTable.Cell>{item.created}</DataTable.Cell>
                <DataTable.Cell>{item.edited}</DataTable.Cell>
              </DataTable.Row>
            )}
          />
        </DataTable>
      </View>
    );
  };

  return <View>{getContent()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
