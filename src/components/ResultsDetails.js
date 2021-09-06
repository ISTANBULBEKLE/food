import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetails = ({result}) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={{uri: result.image_url}}
            />
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.details}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
        marginLeft: 15
    },
    details: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 15
    }
});

export default ResultsDetails;
