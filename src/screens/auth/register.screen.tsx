import React, {ReactElement} from 'react';
import {
  CheckBox,
  Datepicker,
  Icon,
  IconProps,
  Input,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';

import {TouchableWithoutFeedback, View} from 'react-native';
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

  const [name, setName] = React.useState<string>('');
  const [surname, setSurname] = React.useState<string>('');
  const [userName, setUserName] = React.useState<string>('');
  const [emailAddress, setEmailAddress] = React.useState<string>('');
  const [phoneNumber, setPhoneNumber] = React.useState<string>('');
  const [address, setAddress] = React.useState<string>('');
  const [gender, setGender] = React.useState<string>('');
  const [dateOfBirth, setDateOfBirth] = React.useState<string>();
  const [password, setPassword] = React.useState<string>('');
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);

  const styles = useStyleSheet(themedStyles);

  const onRegisterButtonPress = (): void => {
    if (!!emailAddress && !!name && !!userName && !!password) {
      dispatch(
        authActions.register({
          emailAddress,
          userName,
          name,
          surname,
          address,
          gender,
          dateOfBirth,
          password,
        }),
      );
    }
  };

  const onLoginButtonPress = (): void => {
    navigation && navigation.navigate(routes.login);
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const UserIcon = (props: IconProps) => <Icon name="person" {...props} />;
  const UserNameIcon = (props: IconProps) => <Icon name="at" {...props} />;
  const EmailIcon = (props: IconProps) => <Icon name="email" {...props} />;
  const PhoneIcon = (props: IconProps) => <Icon name="phone" {...props} />;
  const AddressIcon = (props: IconProps) => <Icon name="pin" {...props} />;
  const CalendarIcon = (props: IconProps) => (
    <Icon {...props} name="calendar" />
  );

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
      <View style={styles.nameContainer}>
        <Input
          style={{flex: 1, marginEnd: 16}}
          placeholder="Name"
          accessoryRight={UserIcon}
          value={name}
          onChangeText={setName}
        />
        <Input
          style={{flex: 1}}
          placeholder="Surname"
          accessoryRight={UserIcon}
          value={surname}
          onChangeText={setSurname}
        />
      </View>

      <Input
        style={styles.inputMT}
        placeholder="Email"
        keyboardType="email-address"
        accessoryRight={EmailIcon}
        value={emailAddress}
        onChangeText={setEmailAddress}
      />

      <Input
        style={styles.inputMT}
        placeholder="Username"
        accessoryRight={UserNameIcon}
        value={userName}
        onChangeText={setUserName}
      />

      <Input
        style={styles.inputMT}
        placeholder="Phone"
        accessoryRight={PhoneIcon}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <Input
        style={styles.inputMT}
        placeholder="Address"
        accessoryRight={AddressIcon}
        value={address}
        onChangeText={setAddress}
      />

      <View style={[styles.inputMT, styles.nameContainer]}>
        <Input
          style={{flex: 1, marginEnd: 16}}
          placeholder="Gender"
          accessoryRight={UserIcon}
          value={gender}
          onChangeText={setGender}
        />

        <Datepicker
          style={{flex: 1}}
          placeholder="Birthday"
          date={dateOfBirth ? new Date(dateOfBirth) : new Date()}
          onSelect={nextDate => setDateOfBirth(nextDate.toUTCString())}
          accessoryRight={CalendarIcon}
        />
      </View>

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
  nameContainer: {
    flexDirection: 'row',
  },
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
