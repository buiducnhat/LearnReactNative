import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, ButtonProps, Spinner} from '@ui-kitten/components';

export interface SubmitButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const SubmitButton = ({
  isLoading,
  onPress,
  children,
  ...rest
}: SubmitButtonProps) => {
  const LoadingIndicator = () =>
    isLoading ? (
      <View style={styles.indicator}>
        <Spinner size="small" status="basic" />
      </View>
    ) : (
      <></>
    );

  return (
    <Button
      style={styles.button}
      size="giant"
      onPress={onPress}
      accessoryRight={LoadingIndicator}
      disabled={isLoading}
      {...rest}>
      {children}
    </Button>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 16,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
