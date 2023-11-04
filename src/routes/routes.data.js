import Auth from '../components/screens/auth/Auth';
import Home from '../components/screens/home/Home';
import NewWorkout from '../components/screens/new-workout/newWorkout';
import Profile from '../components/screens/profile/Profile';

export const routes = [
  {
    path: '/',
    component: Home,
    isAuth: false,
  },
  {
    path: '/auth',
    component: Auth,
    isAuth: false,
  },
  {
    path: '/new-workout',
    component: NewWorkout,
    isAuth: false,
  },
  {
    path: '/profile',
    component: Profile,
    isAuth: false,
  },
];
