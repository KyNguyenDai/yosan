import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

type Props = {
    _name: string,
    _number_f: boolean,
    _placeHolder: string,
    _getValue(val: any): any
}

const UselessTextInput = ({ _name, _number_f, _placeHolder }: Props) => {
    const [value, onChangeText] = React.useState('');

    return (
        <View style={{ width: "100%", height: "100%" }}>
            <Text>{_name}</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder={_placeHolder}
                clearTextOnFocus={true}
                keyboardType={_number_f ? 'numeric' : 'default'}
            />
        </View>

    );
}

export default UselessTextInput;