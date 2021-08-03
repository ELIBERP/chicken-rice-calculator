import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Jiro } from 'react-native-textinput-effects';
import { MyButton } from '../components/MyButton';
import database from '@react-native-firebase/database';

function register({navigation}) {
    const [emailInput, onChangeEmailInput] = React.useState('');
    const [passwordInput, onChangePasswordInput] = React.useState('');
    const [repeatPasswordInput, onChangeRepeatPasswordInput] = React.useState('');

    async function register () {
        if (passwordInput != repeatPasswordInput) {
            alert("Passwords do not match");
        }

        const DATA = await database()
            .ref(`/${emailInput}`)
            .set({
                password: passwordInput,
            })
            .then(() => {return "success"});

        if (DATA === "Data set.") {
            alert("Account created successfully!")
            navigation.navigate('login');
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.Text}>Register</Text>
            {/* <StatusBar style="auto" /> */}

            <View>
                <Jiro
                    label={'Email'}
                    borderColor={'#aee2c9'}
                    inputPadding={16}
                    inputStyle={{ color: 'white' }}
                    onChangeText={(emailInput) => onChangeEmailInput(emailInput)}
                    value={emailInput}
                />
            </View>

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

            <View>
                <Jiro
                    label={'Re-Type Password'}
                    borderColor={'#aee2c9'}
                    inputPadding={16}
                    inputStyle={{ color: 'white' }}
                    secureTextEntry={true}
                    onChangeText={(repeatPasswordInput) => onChangeRepeatPasswordInput(repeatPasswordInput)}
                    value={repeatPasswordInput}
                />
            </View>

            <View style={styles.itemContainer}>
                <MyButton onPress={register.bind(this)} title="Give me chicken rice!" size="sm" backgroundColor="#aee2c9" />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={styles.Text2}>Back to Login</Text>
            </TouchableOpacity>
        </View>
    )
}

// onPress={checkLogin.bind(this)} 

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

export default register;