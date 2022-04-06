import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Button, Card, Modal, Text} from '@ui-kitten/components';

interface ConfirmDialogProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: string;
  button1Text?: string;
  button1Callback?: () => any;
  button2Text?: string;
  button2Callback?: () => any;
}

const ConfirmDialog = ({
  visible,
  setVisible,
  title,
  content,
  button1Text,
  button1Callback,
  button2Text,
  button2Callback,
}: ConfirmDialogProps) => {
  const Header = (props: any) => (
    <View {...props}>
      <Text category="h6">{title}</Text>
    </View>
  );

  const Footer = (props: any) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
      <Button
        style={styles.footerControl}
        size="small"
        status="basic"
        onPress={button1Callback}>
        {button1Text || 'NO'}
      </Button>
      <Button
        style={styles.footerControl}
        size="small"
        onPress={button2Callback}>
        {button2Text || 'YES'}
      </Button>
    </View>
  );

  return (
    <Modal
      style={styles.container}
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => setVisible(false)}>
      <Card style={styles.card} header={Header} footer={Footer}>
        <Text>{content}</Text>
      </Card>
    </Modal>
  );
};

export default ConfirmDialog;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.8,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
