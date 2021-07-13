import React from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ProgressChart } from "react-native-chart-kit";
import { MyCard } from '../components/MyCard';

var canAfford = 'lemon chicken'

function home() {
    return (
        <View style={styles.container}>
            {/* <StatusBar style="auto" /> */}
            <Text style={styles.Text}>You can afford</Text>
            <Text style={styles.Text2}>{canAfford}</Text>
            
            <ProgressChart
                data={data}
                width={Dimensions.get("window").width}
                height={220}
                strokeWidth={16}
                radius={100}
                chartConfig={chartConfig}
                hideLegend={true}
            />

            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    <MyCard>
                        <Text>MANGO</Text>
                    </MyCard>

                    <MyCard>
                        <Text>APPLE</Text>
                    </MyCard>

                    <MyCard>
                        <Text>ORANGE</Text>
                    </MyCard>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(30, 174, 152, 0.15)'
    },
    Text: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 36,
        marginTop: 20
    },
    Text2: {
        textAlign: "center",
        fontSize: 24,
        marginBottom: 20,
    },
    scrollView: {
        marginTop: 20,
    },
});

// each value represents a goal ring in Progress chart
const data = {
    labels: ["Swim"], // optional
    data: [0.75]
};

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(30, 174, 152, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

export default home;