import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {Provider as ReduxProvider} from 'react-redux';

import MyNavigationContainer from './navigations';
import {store} from './features/store';
import {useAppSelector} from './hooks/redux.hook';
import {selectThemeType} from './features/app/app.slice';

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const themeType = useAppSelector(selectThemeType);
  return (
    <ApplicationProvider
      {...eva}
      theme={themeType === 'light' ? eva.light : eva.dark}>
      {children}
    </ApplicationProvider>
  );
};

const App = () => {
  return (
    <ReduxProvider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeProvider>
        <MyNavigationContainer />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
