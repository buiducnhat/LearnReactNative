import {View} from 'react-native';
import React from 'react';
import {KeyboardAvoidingView} from '@/components/keyboard-avoiding-view';
import {Layout, StyleService, Text, useStyleSheet} from '@ui-kitten/components';

interface AuthTemplateProps {
  renderInputs: React.ReactNode;
  renderActions: React.ReactNode;
  heading: string;
  label: string;
}

const AuthTemplate = ({
  heading,
  label,
  renderActions,
  renderInputs,
}: AuthTemplateProps) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
          {heading}
        </Text>
        <Text style={styles.label} category="s1" status="control">
          {label}
        </Text>
      </View>
      <Layout style={styles.formContainer} level="1">
        {renderInputs}
      </Layout>
      {renderActions}
    </KeyboardAvoidingView>
  );
};

export default AuthTemplate;

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
    backgroundColor: 'color-primary-default',
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  label: {
    marginTop: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});
