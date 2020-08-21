import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import { useState, useEffect } from 'react';

type Props = {
    _number_f: boolean,
    _placeHolder: string,
    _value: any,
    getValue(val: any): any
}

const UselessTextInput = ({ _number_f, _placeHolder, getValue, _value }: Props) => {
    const [value, onChangeText] = useState('');
    const handleInput = (text: any) => {
        onChangeText(text);
    }
    useEffect(() => {
        getValue(value);
    })
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.wrapper}
                onChangeText={(text: any) => handleInput(text)}
                value={_value || value}
                placeholder={_placeHolder}
                clearTextOnFocus={true}
                keyboardType={_number_f ? 'numeric' : 'default'}
            />
        </View >

    );
}

const styles = {
    container: {
        flex: 1,
        marginVertical: 5
    },
    wrapper: {
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 5,
        fontSize: 13
    }

}

export default UselessTextInput;