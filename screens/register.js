import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Jiro } from 'react-native-textinput-effects';
import { MyButton } from '../components/MyButton';
import database from '@react-native-firebase/database';

function register({navigation}) {
    const [usernameInput, onChangeUsernameInput] = React.useState('');
    const [passwordInput, onChangePasswordInput] = React.useState('');
    const [repeatPasswordInput, onChangeRepeatPasswordInput] = React.useState('');

    async function register () {
        if (usernameInput == null || passwordInput == null || repeatPasswordInput == null || usernameInput === "" || passwordInput === "" || repeatPasswordInput === "") {
            return alert("Please fill all the fields!")
        }
        if (passwordInput != repeatPasswordInput) {
            return alert("Passwords do not match");
        }

        const checkingUsername = await database()
        .ref(`/${usernameInput}`)
        .once('value')
        .then(snapshot => {
            // console.log("login " + snapshot.val())
            return snapshot.val();
        });;

        if (checkingUsername != null) {
            return alert(`Username already exist! \nTry a different username`)
        } 

        const DATA = await database()
            .ref(`/${usernameInput}`)
            .set({
                password: passwordInput,
            })
            .then(() => {return "success"});

        if (DATA === "success") {
            alert("Account created successfully!")
            onChangeUsernameInput(null);
            onChangePasswordInput(null);
            onChangeRepeatPasswordInput(null);
            navigation.navigate('login');
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.Text}>Register</Text>
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