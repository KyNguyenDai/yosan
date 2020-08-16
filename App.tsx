import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import UselessTextInput from "./src/components/UselessTextInput";
import CusButton from "./src/components/CusButton";
import DisplayCom from "./src/components/DisplayCom";
import { useState, useEffect } from 'react';

export default function App() {
  const [total, setTotal] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);
  const submitFunc = () => {
    console.log('---Total---', price + 1)
  }

  const _f = (val: number) => {
    console.log('---sdfsd---', typeof val)
    setPrice(val)
  }

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <DisplayCom
          _total={total}
        />
      </View>
      <View style={styles.form}>
        <UselessTextInput
          _name="Name"
          _number_f={false}
          _placeHolder="Enter name..."
          getValue={(val) => setName(val)}

        />
        <UselessTextInput
          _name="Price"
          _number_f={true}
          _placeHolder={'Enter price...'}
          getValue={(val: number) => _f(val)}
        />
      </View>
      <View style={styles.submitBtn}>
        <CusButton
          _btnName={"Submit"}
          _submitFunc={() => submitFunc()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    backgroundColor: '#FFDFD3',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 2,
    backgroundColor: '#FEC8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtn: {
    flex: 1,
    backgroundColor: '#E2EEC2',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


