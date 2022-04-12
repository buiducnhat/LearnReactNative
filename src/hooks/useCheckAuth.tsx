import {useEffect} from 'react';

import {
  authActions,
  selectCurrentUser,
  selectIsAuthenticated,
} from '@/features/auth/auth.slice';
import {useAppDispatch, useAppSelector} from './redux.hook';

export default function () {
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const currentUser = useAppSelector(selectCurrentUser);

  useEffect(() => {
    !isAuthenticated && dispatch(authActions.getMe());
  }, [dispatch, isAuthenticated]);

  return {isAuthenticated, currentUser};
}
