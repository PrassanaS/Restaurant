import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({title, results}) => {
    return <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator = {false}
            data={results}
            keyExtractor={(result) => results.id}
            renderItem={({item}) => {
                return <ResultsDetail result ={item} />
            }}

            />
        </View>
};

const  styles =  StyleSheet.create ({
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 5
    }
});

export default ResultsList;