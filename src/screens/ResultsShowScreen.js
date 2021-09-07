import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);
 

  const getResults= async(id) =>{
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  }

  useEffect(() => {
    getResults(id);2021
  } , []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image 
                      style={styles.image} 
                      source={{uri: item}} 
                  />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    borderRadius: 4,
    marginBottom: 10
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 10
  },
  container: {
    margin: 10
  }
});

export default ResultsShowScreen;