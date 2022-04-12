import {
  selectCurrentUser,
  selectIsAuthenticated,
} from '@/features/auth/auth.slice';
import {useAppSelector} from './redux.hook';

export default function () {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const currentUser = useAppSelector(selectCurrentUser);

  return {isAuthenticated, currentUser};
}
