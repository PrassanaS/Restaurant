import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

  const [term, setTerm] = useState ('');
  const [searchApi, results, errorMessage] = useResults();

  const filterByPrice = (price) => {
  
    return results.filter(result => {
      return result.price === price;
    });
  };

  return <View style={{flex: 1}}>
    <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(searchTerm)} />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <ScrollView>
    <ResultsList results={filterByPrice('$')} title="Cheap" />
    <ResultsList results={filterByPrice('$$')} title="Moderate" />
    <ResultsList results={filterByPrice('$$$')} title="Expenny" />
    </ScrollView>
    </View>
};

const style = StyleSheet.create({});

export default SearchScreen;