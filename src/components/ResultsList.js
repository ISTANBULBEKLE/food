import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetails from './ResultsDetails';
import { withNavigation } from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.detail}> Total number of results are: {results.length}</Text>
            <FlatList 
                horizontal={true}
                data={results}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity  
                            onPress={() => navigation.navigate('ResultsShow', {id:item.id})}>
                            <ResultsDetails result={item}/>
                        </TouchableOpacity>
                    )
                }}
            
            />
        </View>
    )
};

const styles = StyleSheet.create({
titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    marginLeft: 15,
},
resultStyle: {
    fontSize: 16,
    padding: 10
},
detail: {
    fontSize: 16,
    padding: 5,
    marginLeft: 15
},
container: {
    marginBottom: 10
}

});

export default withNavigation(ResultsList);