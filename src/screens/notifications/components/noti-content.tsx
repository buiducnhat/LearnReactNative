import {useWindowDimensions} from 'react-native';
import React from 'react';
import {useTheme} from '@ui-kitten/components';
import RenderHtml from 'react-native-render-html';

interface NotificationContentProps {
  data: string;
}

type MixedStyleRecord = any;

const NotificationContent = ({data}: NotificationContentProps) => {
  const {width} = useWindowDimensions();

  const theme = useTheme();

  const tagsStyles: MixedStyleRecord = {
    body: {
      whiteSpace: 'normal',
      color: theme['text-basic-color'],
      fontSize: 16,
    },
    a: {
      color: theme['text-primary-color'],
    },
  };

  return (
    <RenderHtml
      contentWidth={width}
      source={{html: data}}
      tagsStyles={tagsStyles}
    />
  );
};

export default NotificationContent;
