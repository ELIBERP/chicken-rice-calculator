import React from 'react';
import { View, StyleSheet } from 'react-native';

const MyCard = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 30,
        backgroundColor: 'rgba(30, 174, 152, 0.25)',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    cardContent: {
        marginHorizontal: 25,
        marginVertical: 20,
    }
})

export { MyCard }