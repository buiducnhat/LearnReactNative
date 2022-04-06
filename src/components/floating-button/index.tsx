import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from 'react';
import {StyleService, Text, useStyleSheet} from '@ui-kitten/components';

const FloatingButton = (props: TouchableOpacityProps) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

export default FloatingButton;

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'color-primary-500',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
    position: 'absolute',
    bottom: 16,
    right: 16,
    elevation: 10,
  },
  text: {
    color: 'text-control-color',
    fontSize: 32,
  },
});
