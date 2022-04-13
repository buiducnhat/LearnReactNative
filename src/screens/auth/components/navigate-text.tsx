import {StyleSheet} from 'react-native';
import React from 'react';
import {Button, ButtonProps} from '@ui-kitten/components';

const NavigateText = ({children, ...rest}: ButtonProps) => {
  return (
    <Button style={styles.main} appearance="ghost" status="basic" {...rest}>
      {children}
    </Button>
  );
};

export default NavigateText;

const styles = StyleSheet.create({
  main: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
});
