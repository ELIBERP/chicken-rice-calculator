import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MyCard } from '../components/MyCard';

const MyModule = (props) => {
    return (
        <MyCard>
            <View style={styles.container}>
                <View>
                    <Text style={styles.itemTitle}>
                    {props.modName}
                    </Text>
                </View>

                <View style={styles.itemContainer}>
                    <Text style={styles.viewContainer}>
                        Module Credits: {props.modCredit}
                    </Text>

                    <Text style={styles.viewContainer}>
                        Grade Points: {props.modGradePoint}
                    </Text>
                </View>

            </View>
        </MyCard>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
    }, viewContainer: {
        textAlign: 'center',
        alignSelf: 'center',
        width: '50%',
    }, itemTitle: {
        textAlign: 'left',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    }, itemContainer: {
        flexDirection: 'row',
    }

})

export { MyModule }