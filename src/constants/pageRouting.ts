import { IPage } from 'src/types';

import { PagePaths } from './pagePaths';

import ClientErrorPage from 'src/pages/ClientErrorPage/ClientErrorPage';
import MessengerPage from 'src/pages/MessengerPage/MessengerPage';
import PasswordPage from 'src/pages/PasswordPage/PasswordPage';
import ProfilePage from 'src/pages/ProfilePage/ProfilePage';
import SettingsPage from 'src/pages/SettingsPage/SettingsPage';
import SignInPage from 'src/pages/SignInPage/SignInPage';
import SignUpPage from 'src/pages/SignUpPage/SignUpPage';

export const PAGES: IPage[] = [
  {
    path: [PagePaths.Index, PagePaths.Signin],
    block: SignInPage,
    props: { title: 'Вход' },
  },
  {
    path: PagePaths.Signup,
    block: SignUpPage,
    props: { title: 'Регистрация' },
  },
  {
    path: PagePaths.Messanger,
    block: MessengerPage,
    props: { title: 'Чат' },
  },
  {
    path: PagePaths.Profile,
    block: ProfilePage,
    props: { title: 'Профиль' },
  },
  {
    path: PagePaths.Settings,
    block: SettingsPage,
    props: { title: 'Профиль - настройки' },
  },
  {
    path: PagePaths.Password,
    block: PasswordPage,
    props: { title: 'Профиль - пароль' },
  },
  {
    path: PagePaths.NotFound,
    block: ClientErrorPage,
    props: { title: 'Page Not Found - 404' },
  },
];
