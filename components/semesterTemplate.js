import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, SafeAreaView, Button, TextInput, TouchableOpacity } from 'react-native';
import { MyCard } from '../components/MyCard';
import { Col, Row, Grid } from "react-native-easy-grid";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import database from '@react-native-firebase/database';

var emailInput = 'lx';
var semester = '1';
var module = 'ST0507';
var dataType = 'modCode';
var extractedData;

const SemesterTemplate = () => {

    var header0, header1;

    async function fetchData () {
        var keys, key;

        await database()
        .ref(`/${emailInput}/${semester}`)
        .once('value')
        .then(snapshot => {
            console.log(snapshot)
            console.log(snapshot.toJSON().ST0507.modCode)
            return snapshot.toJSON();
        }).then((json) => {
            extractedData = json;
            console.log(Object.keys(extractedData))
            keys = Object.keys(extractedData);
        });;

        for(var i = 0; i < keys.length; i++) {
            key = keys[i];
            console.log(key);
        }

        if (i == 0) {
            // header0 = key + ' ewjroiwe '
            // console.log(header0 + ' hi');
            setModCode2(key[0]);
        } else if (i == 3) {
            header1 = key + ' correct one'
            console.log(header1 + ' ejrojoe')
            setModCode1(key);
        }
    }

    const [isEditable, setIsEditable] = useState(false);
    const [modCode1, setModCode1] = React.useState('');
    const [modCode2, setModCode2] = React.useState('');
    
    const [modGrade1, setModGrade1] = React.useState('');
    const [modGrade2, setModGrade2] = React.useState('');

    const [modCredit1, setModCredit1] = React.useState('');
    const [modCredit2, setModCredit2] = React.useState('');

    const updateState = () => {
        //Handler to enable of disable TextInput
        //Make TextInput Enable/Disable
        setIsEditable(!isEditable);
    };

    
    fetchData();
    
    return (
        <MyCard>
            <View style={styles.cardHeader}>
                <View style={styles.cardHeaderColumn}>
                    <Text style={styles.cardTitle}>Current Semester</Text>
                </View>

                <View style={styles.cardHeaderColumn}>
                    <Text style={styles.cardGPA}>3.57</Text>
                </View>
            </View>
            <View style={styles.cardBody}>
                <Grid>
                    <Col>
                        <Row style={{height: 40}}>
                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>MODULE CODE</Text>
                        </Row>
                        <Row>
                            <TextInput 
                            editable={isEditable}
                            value={modCode1}
                            onChangeText={(modCode1) => setModCode1(modCode1)}
                            color={isEditable ? 'blue' : 'black'}
                            >
                            </TextInput>
                        </Row>
                        <Row>
                            <TextInput 
                            editable={isEditable}
                            value={modCode2}
                            onChangeText={(modCode2) => setModCode2(modCode2)}
                            color={isEditable ? 'blue' : 'black'}
                            >
                            </TextInput>
                        </Row>
                    </Col>
                    <Col>
                        <Row style={{height: 40}}>
                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>MODULE GRADE</Text>
                        </Row>
                        <Row>
                            <TextInput 
                            editable={isEditable}
                            value={modGrade1}
                            onChangeText={(modGrade1) => setModGrade1(modGrade1)}
                            color={isEditable ? 'blue' : 'black'}
                            >
                            </TextInput>
                        </Row>
                        <Row>
                            <TextInput 
                            editable={isEditable}
                            value={modGrade2}
                            onChangeText={(modGrade2) => setModGrade2(modGrade2)}
                            color={isEditable ? 'blue' : 'black'}
                            >
                            </TextInput>
                        </Row>
                    </Col>
                    <Col>
                        <Row style={{height: 40}}>
                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>MODULE CREDITS</Text>
                        </Row>
                        <Row>
                            <TextInput 
                            editable={isEditable}
                            value={modCredit1}
                            onChangeText={(modCredit1) => setModCredit1(modCredit1)}
                            color={isEditable ? 'blue' : 'black'}
                            >
                            </TextInput>
                        </Row>
                        <Row>
                            <TextInput 
                            editable={isEditable}
                            value={modCredit2}
                            onChangeText={(modCredit2) => setModCredit2(modCredit2)}
                            color={isEditable ? 'blue' : 'black'}
                            >
                            </TextInput>
                        </Row>
                    </Col>
                </Grid>
                <TouchableOpacity onPress={updateState}>
                    <MaterialIcon name="mode-edit"/>
                </TouchableOpacity>
            </View>
        </MyCard>
    )
}

const styles = StyleSheet.create({
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
    },
})
export { SemesterTemplate }