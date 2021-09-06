import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetails from './ResultsDetails';

const ResultsList = ({title, results}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.detail}> Total number of results are: {results.length}</Text>
            <FlatList 
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return <ResultsDetails result={item}/>
                }}
            
            />
        </View>
    )
};

const styles = StyleSheet.create({
titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    marginLeft: 15,
},
resultStyle: {
    fontSize: 16,
    padding: 10
},
detail: {
    fontSize: 16,
    padding: 10,
    marginLeft: 15
},
container: {
    marginBottom: 10
}

});

export default ResultsList;