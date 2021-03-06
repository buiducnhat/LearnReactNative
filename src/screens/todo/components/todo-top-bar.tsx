import React from 'react';
import {
  Avatar,
  Icon,
  IconProps,
  MenuItem,
  OverflowMenu,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';

import {useAppDispatch} from '@/hooks/redux.hook';
import {todoActions} from '@/features/todo/todo.slice';
import ConfirmDialog from '@/components/confirm-dialog';

const MenuIcon = (props: IconProps) => <Icon {...props} name="more-vertical" />;

const ClearIcon = (props: IconProps) => (
  <Icon {...props} name="trash-2-outline" />
);

const TodoTopBar = () => {
  const dispatch = useAppDispatch();
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [confirmClearVisible, setConfirmClearVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const onPressClearTodo = () => {
    setMenuVisible(false);
    setConfirmClearVisible(true);
  };

  const handleClearTodo = () => {
    dispatch(todoActions.clearTodo());
    setMenuVisible(false);
    setConfirmClearVisible(false);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderRightActions = () => (
    <OverflowMenu
      anchor={renderMenuAction}
      visible={menuVisible}
      onBackdropPress={toggleMenu}>
      <MenuItem
        accessoryLeft={ClearIcon}
        title="Clear"
        onPress={onPressClearTodo}
      />
    </OverflowMenu>
  );

  const renderTitle = (props: any) => (
    <View style={styles.titleContainer}>
      <Avatar
        style={styles.logo}
        source={require('@/assets/images/todo-icon.png')}
      />
      <Text {...props} category="h5" style={{}}>
        My Todo
      </Text>
    </View>
  );

  return (
    <>
      <ConfirmDialog
        visible={confirmClearVisible}
        setVisible={setConfirmClearVisible}
        title="Warning"
        content="Are you sure to clear all todos?"
        button1Callback={() => setConfirmClearVisible(false)}
        button2Callback={handleClearTodo}
      />
      <TopNavigation
        style={styles.container}
        title={renderTitle}
        accessoryRight={renderRightActions}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginEnd: 16,
  },
});

export default TodoTopBar;
