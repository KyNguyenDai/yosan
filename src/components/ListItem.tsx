import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Platform, TouchableHighlight } from "react-native";

type Props = {
    data: any
}

const ListItem = ({ data }: Props) => {
    useEffect(() => {
    })

    return (
        <View style={styles.container}>
            {data && data.length > 0 &&
                <FlatList
                    inverted
                    data={data}
                    renderItem={({ item, index, separators }) => (
                        <View style={styles.item}>
                            <Text>{`${item.name}:${item.price}`}</Text>
                        </View>
                    )}
                />
            }

        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    item: {
        alignSelf: 'flex-start',
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5
    }
});

export default ListItem;