import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function home() {
    return (

            <View style={styles.container}>
                <Text>Homepage</Text>
                <StatusBar style="auto" />
            </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default home;