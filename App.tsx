import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { CusButton, CusSwitch, ListItem, UselessTextInput } from "./src/components";
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
    const _total = Math.round(total + (price + price * _taxValue));
    setTotal(_total);
    Keyboard.dismiss();
    setPrice(0);
  }

  useEffect(() => {
    console.log("---PRICE--", price)
  }, [isTax10, listItem, price])


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ backgroundColor: 'green' }}>

        <View style={styles.display}>
          <ListItem
            data={listItem.reverse()}
          />
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.totalView}>
        <Text style={{ fontSize: 30, fontWeight: '400' }}>{total}</Text>
      </View>
      <View style={styles.form}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <View style={{ height: 120, width: '60%', justifyContent: 'space-between' }}>
            <UselessTextInput
              _number_f={false}
              _placeHolder="Enter name..."
              _value={name}
              getValue={(val) => setName(val)}

            />
            <UselessTextInput
              _number_f={true}
              _value={price}
              _placeHolder={'Enter price...'}
              getValue={(val: number) => setPrice(val * 1)}
            />
          </View>
          <CusSwitch
            getStatus={(val) => setTax(val)}
          />
        </View>
        <CusButton
          _btnName={"Submit"}
          _submitFunc={() => submitFunc()}
        />
      </View >
    </KeyboardAvoidingView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  display: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    maxHeight: 700,
  },
  form: {
    alignSelf: 'flex-end',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 50
  },
  totalView: {
    backgroundColor: '#FFF5FB',
    shadowColor: 'rgba(0.1, 0, 0, 0)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 10 },
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 50,
    borderTopColor: 'grey',
  }
});
