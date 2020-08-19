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
                <Text>{_btnName}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
    },
    countContainer: {
        alignItems: "center",
    }
});

export default CusButton;
