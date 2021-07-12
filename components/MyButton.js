import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.7 };

const MyButton = ({ onPress, title, size, backgroundColor }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.appButtonContainer,
        size === "sm" && {
          paddingHorizontal: 8,
          paddingVertical: 6,
          elevation: 6
        },
        backgroundColor && { backgroundColor }
      ]}
    >
        <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }]}>
            {title}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
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

export { MyButton }; // exporting components only named exports 