import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import UselessTextInput from "./src/components/UselessTextInput";
import CusButton from "./src/components/CusButton";
import DisplayCom from "./src/components/DisplayCom";
import CusCheckBox from "./src/components/CusCheckBox";
import { useState, useEffect } from 'react';

export default function App() {
  const [total, setTotal] = useState<number>(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [isTax10, setTax] = useState(false);

  const submitFunc = () => {
    const _taxValue = isTax10 ? 0.1 : 0.08;
    const _total = total + (price + price * _taxValue);
    setTotal(_total);
  }


  useEffect(() => {
    console.log("--IS TAX 10--", isTax10)
  }, [isTax10])


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
          getValue={(val: number) => setPrice(val * 1)}
        />

      </View>
      <View style={{ flexDirection: "row", zIndex: 2, height: 20 }}>
        <CusCheckBox
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


