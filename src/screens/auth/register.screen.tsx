import React, {ReactElement} from 'react';
import {
  CheckBox,
  Icon,
  IconProps,
  Input,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';

import {TouchableWithoutFeedback} from 'react-native';
import {routes} from '@/configs/routes.config';
import {useAppDispatch, useAppSelector} from '@/hooks/redux.hook';
import {authActions} from '@/features/auth/auth.slice';
import SubmitButton from './components/submit-button';
import NavigateText from './components/navigate-text';
import AuthTemplate from './components/auth-template';

const RegisterScreen = ({
  navigation,
}: {
  navigation: any;
}): React.ReactElement => {
  const dispatch = useAppDispatch();

  const isPendingRegister = useAppSelector(
    state => state.auth.isPendingRegister,
  );

  const [name, setName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);

  const styles = useStyleSheet(themedStyles);

  const onRegisterButtonPress = (): void => {
    if (!!email && !!name && !!password) {
      dispatch(authActions.register({email, name, password}));
    }
  };

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

  const renderInputs = () => (
    <>
      <Input
        placeholder="Name"
        accessoryRight={UserIcon}
        value={name}
        onChangeText={setName}
      />
      <Input
        style={styles.inputMT}
        placeholder="Email"
        keyboardType="email-address"
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
    </>
  );

  const renderActions = () => (
    <>
      <SubmitButton
        isLoading={isPendingRegister}
        onPress={onRegisterButtonPress}>
        REGISTER
      </SubmitButton>
      <NavigateText onPress={onLoginButtonPress}>
        Already have an account? Login now
      </NavigateText>
    </>
  );

  return (
    <>
      <AuthTemplate
        heading="Hello"
        label="Register new account"
        renderInputs={renderInputs()}
        renderActions={renderActions()}
      />
    </>
  );
};

const themedStyles = StyleService.create({
  termsCheckBox: {
    marginTop: 24,
  },
  termsCheckBoxText: {
    color: 'text-hint-color',
    marginLeft: 10,
  },
  inputMT: {
    marginTop: 16,
  },
});

export default RegisterScreen;
