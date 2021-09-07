import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  //console.log(navigation);
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  }

  return (
    <>
      <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
      <ScrollView>
        <ResultsList 
          title="Cost Effective" 
          results={filterResultsByPrice('$')}
        />
        <ResultsList  
          title="Bit Pricier"
          results={filterResultsByPrice('$$')}
        />
        <ResultsList 
          title="Big Spender" 
          results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 20,
    color: 'red',
    marginLeft: 15,
    marginRight: 15,
    padding: 10
  },
  textHeader: {
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
    padding: 10
  }
});

export default SearchScreen;
