import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ListView } from "react-native";
import ListItem from "./ListItem"
type Props = {
    _total: number,
    _dataSource: any
}

const DisplayCom = ({ _total, _dataSource }: Props) => {

    return (
        <View style={styles.container}>

            <ListItem
                data={_dataSource}
            />
            <Text>Total:</Text>
            <Text>{_total}</Text>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    }
});

export default DisplayCom;
