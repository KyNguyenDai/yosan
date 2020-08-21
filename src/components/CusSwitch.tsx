import React, { useState, useEffect } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

type Props = {
    getStatus(val: any): any
}

const CusSwitch = ({ getStatus }: Props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }


    useEffect(() => {
        getStatus(isEnabled)
    }, [isEnabled])

    return (
        <View style={styles.container}>
            <Text style={styles.taxStyle}>{"8%"}</Text>
            <Switch
                trackColor={{ false: "green", true: "yellow" }}
                thumbColor={isEnabled ? "#f5dd4b" : "yellow"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <Text style={styles.taxStyle}>{"10%"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    taxStyle: {
        fontSize: 13
    }
});

export default CusSwitch;
