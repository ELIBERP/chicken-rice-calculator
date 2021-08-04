import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MyCard } from '../components/MyCard';

const MyModule = (props) => {
    return (
        <MyCard>
            <View style={styles.container}>

                <Text style={styles.viewContainer}>
                    Module Credits: {props.modCredit}
                </Text>

                <Text style={styles.viewContainer}>
                    Grade Points: {props.modGradePoint}
                </Text>

            </View>
        </MyCard>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        flexDirection: 'row',
    }, viewContainer: {
        textAlign: 'center',
        alignSelf: 'center',
        width: '50%',
    }
})

export { MyModule }