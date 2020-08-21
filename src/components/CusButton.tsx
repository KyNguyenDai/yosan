import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    _btnName: string,
    _submitFunc(): any
}

const CusButton = ({ _btnName, _submitFunc }: Props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => _submitFunc()}
            >
                <Text style={styles.btnText}>{_btnName}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        marginBottom: 10
    },
    button: {
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#87DCC0",
        borderRadius: 5
    },
    countContainer: {
        alignItems: "center",
    },
    btnText: {
        fontSize: 14
    }
});

export default CusButton;
