import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  theme?: string;
  wideButton?: boolean;
  action: (buttonValue: string) => void;
}

export const Button = ({text, theme, wideButton, action}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor:
            theme === 'gray'
              ? '#9B9B9B'
              : theme === 'orange'
              ? '#FF9427'
              : '#2D2D2D',
          width: wideButton ? 176 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: theme === 'gray' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    paddingBottom: 3,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 35,
    textAlign: 'center',
  },
});
