'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion, useAnimation } from 'framer-motion';
import { sidebarData, sidebarFooterData } from '@/config/sidebar';
import React, { useState, useCallback, useLayoutEffect } from 'react';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';

interface Props {
  className?: string;
}
const Sidebar = ({ className }: Props) => {
  const [active, setActive] = useState(false);
  const controls = useAnimation();
  const controlText = useAnimation();
  const controlTitleText = useAnimation();

  const showMore = useCallback(() => {
    controls.start({
      width: '250px',
      transition: { duration: 0.001 },
    });

    controlText.start({
      opacity: 1,
      display: 'block',
      transition: { delay: 0.3 },
    });

    controlTitleText.start({
      opacity: 1,
      display: 'block',
      transition: { delay: 0.3 },
    });

    setActive(true);
  }, [controlText, controlTitleText, controls]);

  const showLess = useCallback(() => {
    controls.start({
      width: '55px',
      transition: { duration: 0.001 },
    });

    controlText.start({
      opacity: 0,
      display: 'none',
    });

    controlTitleText.start({
      opacity: 0,
      display: 'none',
    });

    setActive(false);
  }, [controlText, controlTitleText, controls]);

  // Hide sidebar on mobile
  const checkSize = useCallback(() => {
    if (window.innerWidth < 768) {
      showLess();
      setActive(false);
    }
  }, [showLess]);

  useLayoutEffect(() => {
    window.addEventListener('resize', checkSize);
    checkSize();
    return () => window.removeEventListener('resize', checkSize);
  }, [checkSize]);

  return (
    <motion.div
      animate={controls}
      className={cn(
        'animate group relative flex w-[55px] max-w-[250px] flex-col content-between backdrop-blur duration-300 supports-[backdrop-filter]:bg-background/60',
        className
      )}
    >
      <div className="absolute -right-4 top-4 hidden md:block">
        {active && (
          <BsFillArrowLeftSquareFill
            onClick={showLess}
            className="top-10 hidden cursor-pointer text-2xl text-black group-hover:block dark:text-white"
          />
        )}

        {!active && (
          <BsFillArrowRightSquareFill
            onClick={showMore}
            className="top-10 cursor-pointer text-2xl text-black dark:text-white"
          />
        )}
      </div>
      <div className="grow">
        {sidebarData.map((group, index) => (
          <div key={index} className="my-2">
            <motion.p
              animate={controlTitleText}
              className="mb-2 ml-4 hidden text-sm font-bold text-gray-500 opacity-0"
            >
              {group.name}
            </motion.p>

            {group.items.map((item, index2) => (
              <Link href={item.link} key={index2} className="flex cursor-pointer px-4 py-1">
                <item.icon className="text-lg text-gray-500 hover:text-primary" />
                <motion.p
                  animate={controlText}
                  className="ml-4 hidden text-sm font-bold text-gray-400 opacity-0 hover:text-primary"
                >
                  {item.title}
                </motion.p>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div>
        {sidebarFooterData.map((group, index) => (
          <div key={index} className="my-2">
            <motion.p
              animate={controlTitleText}
              className="mb-2 ml-4 hidden text-sm font-bold text-gray-500 opacity-0"
            >
              {group.name}
            </motion.p>

            {group.items.map((item, index2) => (
              <Link href={item.link} key={index2} className="flex cursor-pointer px-4 py-1">
                <item.icon className="text-lg text-gray-500 hover:text-primary" />
                <motion.p
                  animate={controlText}
                  className="ml-4 hidden text-sm font-bold text-gray-400 opacity-0 hover:text-primary"
                >
                  {item.title}
                </motion.p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
