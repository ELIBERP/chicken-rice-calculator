import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // clear status bar
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Jiro } from 'react-native-textinput-effects';
import validator from 'validator'; // email validator
import { MyButton } from '../components/MyButton';
import database from '@react-native-firebase/database';

function login({navigation}) {
    const [usernameInput, onChangeUsernameInput] = React.useState('');
    const [passwordInput, onChangePasswordInput] = React.useState('');

    async function checkLogin() {
        const data = {
            password: passwordInput
        }
        const DATA = await database()
        .ref(`/${usernameInput}/password`)
        .once('value')
        .then(snapshot => {
            console.log("login " + snapshot.val())
            return snapshot.val();
        });;
        // fetch(`${url}/login?email=${emailInput}`, {
        //     method: 'POST',
        //     ContentType: 'application/json',
        //     body: JSON.stringify(data),
        // })
        // .then((response) => {
        //     return response.json
        // })
        // .then((json) => {
        //     if (json.error) {throw json.error};
        //     return json;
        // })
        // .catch((error) => {
        //     alert(error);
        // })

        if (DATA == null) {
            alert('User does not exist!')
        } else if( DATA === passwordInput) {
            onChangeUsernameInput(null);
            onChangePasswordInput(null);
            navigation.navigate('home');
        } else {
            alert(' WRONG USERNAME OR PASSWORD! ')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.Text}>Log In</Text>
            {/* <StatusBar style="auto" /> */}

            <View>
                <Jiro
                    label={'Username'}
                    borderColor={'#aee2c9'}
                    inputPadding={16}
                    inputStyle={{ color: 'white' }}
                    onChangeText={(usernameInput) => onChangeUsernameInput(usernameInput)}
                    value={usernameInput}
                />
            </ View>

            <View>
                <Jiro
                    label={'Password'}
                    borderColor={'#aee2c9'}
                    inputPadding={16}
                    inputStyle={{ color: 'white' }}
                    secureTextEntry={true}
                    onChangeText={(passwordInput) => onChangePasswordInput(passwordInput)}
                    value={passwordInput}
                />
            </View>

            <View style={styles.itemContainer}>
                <MyButton onPress={checkLogin.bind(this)} title="I want chicken rice!" size="sm" backgroundColor="#aee2c9" />
            </View>
            

            <TouchableOpacity onPress={() => navigation.navigate('register')}>
                <Text style={styles.Text2}>Register Here</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    itemContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    Text: {
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 36,
    },
    Text2: {
        paddingTop: 15,
        alignSelf: "center",
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    appButtonText: {
        fontSize: 18,
        color: "#000",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default login;