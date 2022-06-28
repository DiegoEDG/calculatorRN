import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../components/Button';
import {appTheme} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    value,
    lastValue,
    limpiar,
    signValue,
    deleteNumber,
    dividedOperation,
    newValue,
    timesOperation,
    minusOperation,
    plusOperation,
    Operation,
  } = useCalculator();
  return (
    <View style={styles.mainContainer}>
      {lastValue !== '0' && (
        <Text style={appTheme.secondTextStyle}>{lastValue}</Text>
      )}
      <Text
        style={appTheme.mainTextStyle}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {value}
      </Text>
      <View style={styles.buttonContainer}>
        <Button text="C" theme="gray" action={limpiar} />
        <Button text="+/-" theme="gray" action={signValue} />
        <Button text="del" theme="gray" action={deleteNumber} />
        <Button text="/" theme="orange" action={dividedOperation} />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="7" action={newValue} />
        <Button text="8" action={newValue} />
        <Button text="9" action={newValue} />
        <Button text="X" theme="orange" action={timesOperation} />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="4" action={newValue} />
        <Button text="5" action={newValue} />
        <Button text="6" action={newValue} />
        <Button text="-" theme="orange" action={minusOperation} />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="1" action={newValue} />
        <Button text="2" action={newValue} />
        <Button text="3" action={newValue} />
        <Button text="+" theme="orange" action={plusOperation} />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="0" wideButton action={newValue} />
        <Button text="." action={newValue} />
        <Button text="=" theme="orange" action={Operation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
