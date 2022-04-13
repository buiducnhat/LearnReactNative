import {
  selectCurrentUser,
  selectIsAuthenticated,
  selectIsPendingGetMe,
} from '@/features/auth/auth.slice';
import {useAppSelector} from './redux.hook';

export default function () {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const currentUser = useAppSelector(selectCurrentUser);
  const isPendingGetMe = useAppSelector(selectIsPendingGetMe);

  return {isAuthenticated, currentUser, isPendingGetMe};
}
