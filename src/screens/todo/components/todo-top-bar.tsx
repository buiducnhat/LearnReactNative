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

const MenuIcon = (props: IconProps) => <Icon {...props} name="more-vertical" />;

const AddIcon = (props: IconProps) => <Icon {...props} name="plus" />;

const ClearIcon = (props: IconProps) => (
  <Icon {...props} name="trash-2-outline" />
);

const TodoTopBar = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderRightActions = () => (
    <OverflowMenu
      anchor={renderMenuAction}
      visible={menuVisible}
      onBackdropPress={toggleMenu}>
      <MenuItem accessoryLeft={AddIcon} title="Add" />
      <MenuItem accessoryLeft={ClearIcon} title="Clear" />
    </OverflowMenu>
  );

  const renderTitle = (props: any) => (
    <View style={styles.titleContainer}>
      <Avatar
        style={styles.logo}
        source={require('../../../assets/images/todo-icon.png')}
      />
      <Text {...props} category="h5" style={{}}>
        My Todo
      </Text>
    </View>
  );

  return (
    <TopNavigation title={renderTitle} accessoryRight={renderRightActions} />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginEnd: 16,
  },
});

export default TodoTopBar;
