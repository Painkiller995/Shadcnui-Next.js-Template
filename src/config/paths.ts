import { NavItem } from '@/types/nav';

export const auth = {
  login: '/login',
  signUp: '/signup',
};

export const paths = {
  home: '/',
  pageOne: '/page-one',
  about: '/about',
  page404: '/404',
  ...auth,
};

export const pathsArr: NavItem[] = [
  {
    title: 'Login',
    description: 'Login to the application',
    href: paths.login,
  },
  {
    title: 'Sign Up',
    description: 'Create a new account',
    href: paths.signUp,
  },
  {
    title: 'Home',
    description: 'Navigate to the home page',
    href: paths.home,
  },
  {
    title: 'Page One',
    description: 'Go to the first page',
    href: paths.pageOne,
  },
  {
    title: 'About',
    description: 'Learn more about us',
    href: paths.about,
  },
  {
    title: '404',
    description: 'Page not found',
    href: paths.page404,
  },
  {
    title: 'Google New Tab',
    description: 'Open Google in a new tab (external link)',
    href: 'https://www.google.com/',
    external: true,
  },
  {
    title: 'Disabled',
    description: 'This link is disabled',
    href: '/disabled',
    disabled: true,
  },
];

export const social = {
  github: 'https://github.com/Painkiller995',
  linkedin: 'https://no.linkedin.com/in/fahddaher995',
  twitter: 'https://twitter.com/fahddaher',
};
