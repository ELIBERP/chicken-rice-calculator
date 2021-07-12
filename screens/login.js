import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // clear status bar
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Jiro } from 'react-native-textinput-effects';
import validator from 'validator'; // email validator
import { MyButton } from '../components/MyButton';

// TouchableOpacity.defaultProps = { activeOpacity: 0.7 };

// const MyButton = ({ onPress, title, size, backgroundColor }) => (
//     <TouchableOpacity
//       onPress={onPress}
//       style={[
//         styles.appButtonContainer,
//         size === "sm" && {
//           paddingHorizontal: 8,
//           paddingVertical: 6,
//           elevation: 6
//         },
//         backgroundColor && { backgroundColor }
//       ]}
//     >
//         <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }]}>
//             {title}
//         </Text>
//     </TouchableOpacity>
// );

function login({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>Log In</Text>
            {/* <StatusBar style="auto" /> */}

            <View>
                <Jiro
                    label={'Email'}
                    borderColor={'#aee2c9'}
                    inputPadding={16}
                    inputStyle={{ color: 'white' }}
                />
            </ View>

            <View>
                <Jiro
                    label={'Password'}
                    borderColor={'#aee2c9'}
                    inputPadding={16}
                    inputStyle={{ color: 'white' }}
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.itemContainer}>
                <MyButton onPress={() => navigation.navigate('home')} title="I want chicken rice!" size="sm" backgroundColor="#aee2c9" />
            </View>
            
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