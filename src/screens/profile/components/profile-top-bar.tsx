import React from 'react';
import {
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

const EditIcon = (props: IconProps) => <Icon {...props} name="edit-outline" />;

const ProfileTopBar = () => {
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
      <MenuItem accessoryLeft={EditIcon} title="Update" />
    </OverflowMenu>
  );

  const renderTitle = (props: any) => (
    <View style={styles.titleContainer}>
      <Text {...props} category="h5" style={{}}>
        My profile
      </Text>
    </View>
  );

  return (
    <TopNavigation
      style={styles.container}
      title={renderTitle}
      accessoryRight={renderRightActions}
    />
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

export default ProfileTopBar;
