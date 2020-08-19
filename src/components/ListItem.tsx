import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Platform, TouchableHighlight } from "react-native";

type Props = {
    data: any
}

const ListItem = ({ data }: Props) => {
    useEffect(() => {
        console.log("--data--", data)
    })

    return (
        <View style={styles.container}>
            {data && data.length > 0 &&
                <FlatList
                    data={data}
                    renderItem={({ item, index, separators }) => (
                        <TouchableHighlight
                            key={item.key}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}>
                            <View style={{ backgroundColor: 'white' }}>
                                <Text>{`${item.name}:${item.price}`}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                />
            }

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    }
});

export default ListItem;