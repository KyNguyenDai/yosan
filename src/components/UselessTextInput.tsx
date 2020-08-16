import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import { useState, useEffect } from 'react';

type Props = {
    _name: string,
    _number_f: boolean,
    _placeHolder: string,
    getValue(val: any): any
}

const UselessTextInput = ({ _name, _number_f, _placeHolder, getValue }: Props) => {
    const [value, onChangeText] = useState('');
    const handleInput = (text: any) => {
        onChangeText(text);
    }
    useEffect(() => {
        console.log('useEffect has been called!');
        getValue(value);
    })
    return (
        <View style={{ width: "100%", height: "100%" }}>
            <Text>{_name}</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text: any) => handleInput(text)}
                value={value}
                placeholder={_placeHolder}
                clearTextOnFocus={true}
                keyboardType={_number_f ? 'numeric' : 'default'}
            />
        </View>

    );
}

export default UselessTextInput;