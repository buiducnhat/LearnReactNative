import React, {ReactElement, useContext} from 'react';
import {
  Button,
  CheckBox,
  Icon,
  IconProps,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';

import {ThemeContext} from '@/features/app/theme.context';
import {TouchableWithoutFeedback, View} from 'react-native';
import {KeyboardAvoidingView} from '@/components/keyboard-avoiding-view';
import {routes} from '@/configs/routes.config';

const RegisterScreen = ({
  navigation,
}: {
  navigation: any;
}): React.ReactElement => {
  const [name, setName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);

  const styles = useStyleSheet(themedStyles);

  const onLoginButtonPress = (): void => {
    navigation && navigation.navigate(routes.login);
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const UserIcon = (props: IconProps) => <Icon name="person" {...props} />;
  const EmailIcon = (props: IconProps) => <Icon name="email" {...props} />;

  const renderPasswordIcon = (props: IconProps): ReactElement => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const renderCheckboxLabel = React.useCallback(
    evaProps => (
      <Text {...evaProps} style={styles.termsCheckBoxText}>
        I read and agree to Terms & Conditions
      </Text>
    ),
    [styles.termsCheckBoxText],
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
          Hello
        </Text>
        <Text style={styles.registerLabel} category="s1" status="control">
          Register new account
        </Text>
      </View>
      <Layout style={styles.formContainer} level="1">
        <Input
          placeholder="Name"
          accessoryRight={UserIcon}
          value={name}
          onChangeText={setName}
        />
        <Input
          style={styles.inputMT}
          placeholder="Email"
          accessoryRight={EmailIcon}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.inputMT}
          placeholder="Password"
          accessoryRight={renderPasswordIcon}
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={setPassword}
        />
        <CheckBox
          style={styles.termsCheckBox}
          checked={termsAccepted}
          onChange={(checked: boolean) => setTermsAccepted(checked)}>
          {renderCheckboxLabel}
        </CheckBox>
      </Layout>
      <Button style={styles.registerButton} size="giant">
        REGISTER
      </Button>
      <Button
        style={styles.loginButton}
        appearance="ghost"
        status="basic"
        onPress={onLoginButtonPress}>
        Already have an account? Login now
      </Button>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: 'color-primary-default',
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  registerLabel: {
    marginTop: 16,
  },
  registerButton: {
    marginHorizontal: 16,
  },
  termsCheckBox: {
    marginTop: 24,
  },
  termsCheckBoxText: {
    color: 'text-hint-color',
    marginLeft: 10,
  },
  loginButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  inputMT: {
    marginTop: 16,
  },
});

export default RegisterScreen;
