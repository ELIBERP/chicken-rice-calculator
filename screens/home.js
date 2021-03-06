import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, SafeAreaView, Button, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ProgressChart } from "react-native-chart-kit";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import { MyButton } from '../components/MyButton';
import { MyModule } from '../components/MyModule';

function home() {
    const [modCredit, setModCredit] = useState('');
    const [modGradePoints, setModGradePoints] = useState('');
    const [modName, setModName] = useState('');
    const [modules, setModules] = useState([]);
    const [culmulativeGPA, setculmulativeGPA] = useState(0);
    const [progressRingData, setProgressRingData] = useState(0);
    const [canAfford, setCanAfford] = useState('(key in data to see what you can buy with your gpa)');


    const addModule = () => {
        if (modCredit == "" || modCredit == null || modGradePoints == "" || modGradePoints == null) {
            return alert("No Input")
        }

        // if (isNaN(modCredit) || isNaN(modGradePoints) ) {
        //     alert("Not a number")
        // }

        if (modCredit > 6 || modGradePoints > 4) {
            return alert("Invalid Range")
        }

        var insertMod = { "modName": modName, "modCredit": modCredit, "modGradePoints": modGradePoints };
        var updatedModArr = [insertMod, ...modules]
        setModules(updatedModArr);
        calculateGPA(updatedModArr);
        setModCredit(null);
        setModGradePoints(null);
        setModName(null);
    }

    const calculateGPA = (modules) => {
        console.log("Calculating GPA")
        var totalModCredits = 0;
        var totalGradePoints = 0;
        var credit = 0;
        var grade = 0;
        var totalGPA = 0;
        var totalGPAdecimal = 0;
        var totalDecimal = 0;

        for (var i = 0; i < modules.length; i++) {
            credit = parseInt(modules[i].modCredit);
            grade = parseInt(modules[i].modGradePoints);

            totalModCredits += (grade * credit);
            totalGradePoints += credit;
        }

        totalGPA = (totalModCredits / totalGradePoints);
        if (totalGPA > 3 && totalGPA <= 4) {
            setCanAfford('lemon chicken ????????');
        } else if (totalGPA > 2 && totalGPA <= 3) {
            setCanAfford('roasted/ white chicken ????');
        } else if (totalGPA > 1 && totalGPA <= 2) {
            setCanAfford('rice ???? & soup ????')
        } else if (totalGPA > 0 && totalGPA <= 1) {
            setCanAfford('cucumber ????')
        }

        totalDecimal = (totalGPA / 4);
        setProgressRingData(totalDecimal);
        return setculmulativeGPA(totalGPA.toFixed(2));
    }

    // each value represents a goal ring in Progress chart
    const data = {
        data: [progressRingData]
    };

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(30, 174, 152, ${opacity})`, // colour of ring
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.scrollView}>
                    {/* <StatusBar style="auto" /> */}
                    <Text style={styles.Text}>You can afford</Text>
                    <Text style={styles.Text2}>{canAfford}</Text>

                    <View>
                        <View style={{ width: Dimensions.get("window").width, height: 200, alignItems: 'center', }}>
                            <Text style={{ fontSize: 36, paddingTop: 74, textAlign: "center", }}> {culmulativeGPA} </Text>
                            <Text style={{ fontSize: 14, textAlign: "center", }}> OUT OF 4.0 </Text>
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

                    <View style={styles.inputBox1}>
                        <Sae
                            label={'Module Name'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'#1eae98'}
                            inputPadding={16}
                            labelHeight={24}
                            labelStyle={{ color: '#1eae98' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            onChangeText={(modName) => { setModName(modName) }}
                            value={modName}
                        />
                    </View>

                    <View style={styles.inputBoxes}>
                        <View style={styles.inputBox}>
                            <Sae
                                label={'Module Credit'}
                                iconClass={FontAwesomeIcon}
                                iconName={'pencil'}
                                iconColor={'#1eae98'}
                                inputPadding={16}
                                labelHeight={24}
                                labelStyle={{ color: '#1eae98' }}
                                // active border height
                                borderHeight={2}
                                // TextInput props
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                onChangeText={(modCredit) => { setModCredit(modCredit) }}
                                value={modCredit}
                            />
                        </View>

                        <View style={styles.inputBox}>
                            <Sae
                                label={'Grade Point'}
                                iconClass={FontAwesomeIcon}
                                iconName={'pencil'}
                                iconColor={'#1eae98'}
                                inputPadding={16}
                                labelHeight={24}
                                labelStyle={{ color: '#1eae98' }}
                                // active border height
                                borderHeight={2}
                                // TextInput props
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                onChangeText={(modGradePoints) => { setModGradePoints(modGradePoints) }}
                                value={modGradePoints}
                            />
                        </View>
                    </View>

                    <View style={styles.itemContainer}>
                        <MyButton onPress={addModule.bind(this)} title="Add module!" size="sm" backgroundColor="#aee2c9" />
                    </View>

                    <View style={styles.itemContainer}>
                        {
                            modules.map((item, index) => {
                                // console.log(item)
                                return (
                                    <View key={index}>
                                        <MyModule modName={item.modName} modCredit={item.modCredit} modGradePoint={item.modGradePoints} />
                                    </View>
                                )
                            })
                        }
                    </View>

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
        flexDirection: 'row',
    }, cardHeaderColumn: {
        flex: 1
    }, cardTitle: {
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
        position: 'absolute',
    }, inputBoxes: {
        width: '80%',
        alignSelf: "center",
        flexDirection: 'row',
    }, inputBox: {
        width: '45%',
        margin: 10,
    },
    itemContainer: {
        marginTop: 20,
        alignItems: 'center',
    }, inputBox1: {
        width: '76.5%',
        alignSelf: "center",
    }
});

export default home;