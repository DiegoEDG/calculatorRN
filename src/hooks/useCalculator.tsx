import React, {useRef, useState} from 'react';

enum Operations {
  plus,
  minus,
  times,
  divided,
}

export const useCalculator = () => {
  const [value, setValue] = useState('0');
  const [lastValue, setLastValue] = useState('0');

  const lastOperation = useRef<Operations>();

  const limpiar = () => {
    setValue('0');
    setLastValue('0');
  };

  const newValue = (buttonValue: string) => {
    if (value.includes('.') && buttonValue === '.') return;

    if (value.startsWith('0') || value.startsWith('-0')) {
      if (buttonValue === '.') {
        setValue(value + buttonValue);
      } else if (buttonValue === '0' && value.includes('.')) {
        setValue(value + buttonValue);
      } else if (buttonValue !== '0' && !value.includes('.')) {
        setValue(buttonValue);
      } else if (buttonValue === '0' && !value.includes('.')) {
        setValue(value);
      } else {
        setValue(value + buttonValue);
      }
    } else {
      setValue(value + buttonValue);
    }
  };

  const signValue = () => {
    if (value.includes('-')) {
      setValue(value.replace('-', ''));
    } else {
      setValue('-' + value);
    }
  };

  const deleteNumber = () => {
    let negative = '';
    let tempValue = value;

    if (value.includes('-')) {
      negative = '-';
      tempValue = value.substring(1);
    }

    if (tempValue.length > 1) {
      setValue(negative + tempValue.slice(0, -1));
    } else {
      setValue('0');
    }
  };

  const keepLastValue = () => {
    if (value.endsWith('.')) {
      setLastValue(value.slice(0, -1));
    } else {
      setLastValue(value);
    }
    setValue('0');
  };

  const dividedOperation = () => {
    keepLastValue();
    lastOperation.current = Operations.divided;
  };
  const timesOperation = () => {
    keepLastValue();
    lastOperation.current = Operations.times;
  };
  const minusOperation = () => {
    keepLastValue();
    lastOperation.current = Operations.minus;
  };
  const plusOperation = () => {
    keepLastValue();
    lastOperation.current = Operations.plus;
  };

  const Operation = () => {
    const firstValue = Number(value);
    const secondValue = Number(lastValue);

    switch (lastOperation.current) {
      case Operations.plus:
        setValue(String(firstValue + secondValue));
        break;
      case Operations.minus:
        setValue(String(secondValue - firstValue));
        break;
      case Operations.times:
        setValue(String(firstValue * secondValue));
        break;
      case Operations.divided:
        setValue(String(secondValue / firstValue));
        break;
    }
    setLastValue('0');
  };

  return {
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
  };
};
