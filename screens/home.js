import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, SafeAreaView, Button, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ProgressChart } from "react-native-chart-kit";
import { MyCard } from '../components/MyCard';

var canAfford = 'lemon chicken'

function home() {
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     View.title = `You clicked ${count} times`;
    // });

    // const [isEditable, setIsEditable] = useState(false);
    // const [textInput, setTextInput] = React.useState('Please Insert value');
    // const updateState = () => {
    //     //Handler to enable of disable TextInput
    //     //Make TextInput Enable/Disable
    //     setIsEditable(!isEditable);
    // };

    const culmulativeGPA = 3.79;

    return (
        <View style={styles.container}>
            {/* <StatusBar style="auto" /> */}
            <Text style={styles.Text}>You can afford</Text>
            <Text style={styles.Text2}>{canAfford}</Text>
            
            <SafeAreaView style={{flex: 1}}>
                <View>
                    <View style={{width: Dimensions.get("window").width, height: 200, alignItems: 'center',}}>
                        <Text style={{fontSize: 36, paddingTop: 74, textAlign: "center",}}> {culmulativeGPA} </Text>
                        <Text style={{fontSize: 14, textAlign: "center",}}> OUT OF 4.0 </Text>
                    </View>
                    <ProgressChart
                        data={data}
                        width={Dimensions.get("window").width}
                        height={220}
                        strokeWidth={18}
                        radius={80}
                        chartConfig={chartConfig}
                        hideLegend={true}
                        style={styles.ProgressChart}
                    />
                </View>
            
            {/* <TextInput
                placeholder={
                    isEditable ?
                    textInput :
                    textInput
                }
                underlineColorAndroid="transparent"
                style={[
                    styles.textInputStyle,
                    {
                    borderColor: isEditable ?
                    'black' : 'red',
                    backgroundColor: isEditable ?
                    'white' : '#d8d8d8',
                    },
                ]}
                //To make TextInput enable/disable
                editable={isEditable}
                value={textInput}
                onChangeText={(textInput) => setTextInput(textInput)}
            />
            <Button
                title={
                    isEditable
                    ? 'Click to Disable TextInput'
                    : 'Click to Enable TextInput'
                }
                onPress={updateState}
            /> */}
            
            {/* <Text>You clicked {count} times</Text>
            <Button onPress={() => setCount(count + 1)} title="click"/> */}

                <ScrollView style={styles.scrollView}>
                    <MyCard>
                        <View style={styles.cardHeader}>
                            <View style={styles.cardHeaderColumn}>
                                <Text style={styles.cardTitle}>Current Semester</Text>
                            </View>

                            <View style={styles.cardHeaderColumn}>
                                <Text style={styles.cardGPA}>3.57</Text>
                            </View>
                        </View>
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
    cardHeader: {
        flex: 1,
        flexDirection:'row',
    }, cardHeaderColumn: {
        flex: 1
    },cardTitle: {
        textAlign: "left",
        fontWeight: 'bold',
        fontSize: 24,
    },
    cardGPA: {
        textAlign: "right",
        fontWeight: 'normal',
        fontSize: 50,
    }, 
    textInputStyle: {
        textAlign: 'center',
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
    }, ProgressChart: {
        position:'absolute',
    }
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