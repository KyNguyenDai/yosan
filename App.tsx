import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { CusButton, CusSwitch, DisplayCom, UselessTextInput } from "./src/components";
import { useState, useEffect } from 'react';

type Item = {
  name: string,
  price: number
}

export default function App() {
  const [total, setTotal] = useState<number>(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [isTax10, setTax] = useState(false);
  const [listItem, setList] = useState<Array<Item>>([]);

  const submitFunc = () => {

    setList([...listItem, { name, price }])
    const _taxValue = isTax10 ? 0.1 : 0.08;
    const _total = total + (price + price * _taxValue);
    setTotal(_total);
  }


  useEffect(() => {
    console.log("--IS TAX 10--", isTax10)
    console.log("--LIST--", listItem)
  }, [isTax10, listItem])


  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <DisplayCom
          _total={total}
          _dataSource={listItem}
        />
      </View>
      <View style={styles.form}>
        <UselessTextInput
          _number_f={false}
          _placeHolder="Enter name..."
          getValue={(val) => setName(val)}

        />
        <UselessTextInput
          _number_f={true}
          _placeHolder={'Enter price...'}
          getValue={(val: number) => setPrice(val * 1)}
        />
        <CusSwitch
          getStatus={(val) => setTax(val)}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    flex: 3,

  },
  form: {
    flex: 2,
  },
  submitBtn: {
    flex: 1,
  }
});


