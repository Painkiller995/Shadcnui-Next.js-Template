import { FaCog } from 'react-icons/fa';
import { IoMdArrowRoundUp } from 'react-icons/io';
import { AiFillFire, AiFillMessage } from 'react-icons/ai';
import { MdFeedback, MdNightlightRound } from 'react-icons/md';
import { BsSearch, BsEyeFill, BsPeopleFill, BsBookmarkFill, BsTerminalFill } from 'react-icons/bs';

import { paths } from './paths';

export const sidebarData = [
  {
    name: 'Discover',
    items: [
      {
        title: 'Popular',
        icon: AiFillFire,
        link: paths.pageOne,
      },
      {
        title: 'Most Upvoted',
        icon: IoMdArrowRoundUp,
        link: paths.pageOne,
      },
      {
        title: 'Best Discussions',
        icon: AiFillMessage,
        link: paths.pageOne,
      },
      {
        title: 'Search',
        icon: BsSearch,
        link: paths.pageOne,
      },
    ],
  },
  {
    name: 'Manage',
    items: [
      {
        title: 'Bookmarks',
        icon: BsBookmarkFill,
        link: paths.pageOne,
      },
      {
        title: 'Reading history',
        icon: BsEyeFill,
        link: paths.pageOne,
      },
      {
        title: 'Focus Mode',
        icon: MdNightlightRound,
        link: paths.pageOne,
      },
      {
        title: 'Customize',
        icon: FaCog,
        link: paths.pageOne,
      },
    ],
  },
];

export const sidebarFooterData = [
  {
    name: '',
    items: [
      {
        title: 'Docs',
        icon: BsBookmarkFill,
        link: paths.pageOne,
      },
      {
        title: 'Changelog',
        icon: BsTerminalFill,
        link: paths.pageOne,
      },
      {
        title: 'Feedback',
        icon: MdFeedback,
        link: paths.pageOne,
      },
      {
        title: 'Invite people',
        icon: BsPeopleFill,
        link: paths.pageOne,
      },
    ],
  },
];
