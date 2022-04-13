import React, {ReactElement} from 'react';
import {
  Button,
  Icon,
  IconProps,
  Input,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

import {TouchableWithoutFeedback, View} from 'react-native';
import {routes} from '@/configs/routes.config';
import {useAppDispatch, useAppSelector} from '@/hooks/redux.hook';
import {authActions} from '@/features/auth/auth.slice';
import SubmitButton from './components/submit-button';
import NavigateText from './components/navigate-text';
import AuthTemplate from './components/auth-template';

const LoginScreen = ({navigation}: {navigation: any}): React.ReactElement => {
  const dispatch = useAppDispatch();

  const isPendingLogin = useAppSelector(state => state.auth.isPendingLogin);

  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const styles = useStyleSheet(themedStyles);

  const onLoginButtonPress = (): void => {
    dispatch(authActions.login({email, password}));
  };

  const onRegisterButtonPress = (): void => {
    navigation && navigation.navigate(routes.register);
  };

  const onForgotPasswordButtonPress = (): void => {
    navigation && navigation.navigate('ForgotPassword');
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const EmailIcon = (props: IconProps) => <Icon name="email" {...props} />;

  const renderPasswordIcon = (props: IconProps): ReactElement => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const renderInputs = () => (
    <>
      <Input
        placeholder="Email"
        keyboardType="email-address"
        accessoryRight={EmailIcon}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.passwordInput}
        placeholder="Password"
        accessoryRight={renderPasswordIcon}
        value={password}
        secureTextEntry={!passwordVisible}
        onChangeText={setPassword}
      />
      <View style={styles.forgotPasswordContainer}>
        <Button
          style={styles.forgotPasswordButton}
          appearance="ghost"
          status="basic"
          onPress={onForgotPasswordButtonPress}>
          Forgot your password?
        </Button>
      </View>
    </>
  );

  const renderActions = () => (
    <>
      <SubmitButton isLoading={isPendingLogin} onPress={onLoginButtonPress}>
        LOGIN
      </SubmitButton>
      <NavigateText onPress={onRegisterButtonPress}>
        Don't have an account? Create
      </NavigateText>
    </>
  );

  return (
    <AuthTemplate
      heading="Hello"
      label="Login to your account"
      renderInputs={renderInputs()}
      renderActions={renderActions()}
    />
  );
};

const themedStyles = StyleService.create({
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

export default LoginScreen;
