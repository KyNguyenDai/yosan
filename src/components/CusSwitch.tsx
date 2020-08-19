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
        console.log("---IS ENABLE---", isEnabled);
    }, [isEnabled])

    return (
        <View style={styles.container}>
            <Text>{"8%"}</Text>
            <Switch
                trackColor={{ false: "green", true: "yellow" }}
                thumbColor={isEnabled ? "#f5dd4b" : "yellow"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <Text>{"10%"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default CusSwitch;
