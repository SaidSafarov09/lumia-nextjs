'use client';
import React, { FC, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonColor } from '@/components/ui/Buttons/ButtonColor/ButtonColor';
import { Burger } from '@/components/ui/Burger/Burger';
import { MobileBurger } from '@/components/common/MobileBurger/MobileBurger';
import { ArrayIcon } from '@/components/ui/Buttons/ArrayIcon';

export const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleOpenMenu = () => setOpenMenu((prevState) => !prevState);

  // useEffect(() => {
  //   const handleAnchorClick = (event: any) => {
  //     event.preventDefault();
  //     const targetId = event.currentTarget.getAttribute('href').substring(1);
  //     const targetElement = document.getElementById(targetId);

  //     if (targetElement) {
  //       // const yOffset = -60;
  //       // const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //       targetElement.scrollIntoView({
  //       // targetElement.scrollTo({
  //         // top: y,
  //         behavior: 'smooth',
  //       });
  //     }
  //   };

  //   const anchors = document.querySelectorAll('a[href^="#"]');
  //   anchors.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick));

  //   return () => {
  //     anchors.forEach((anchor) => anchor.removeEventListener('click', handleAnchorClick));
  //   };
  // }, []);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} href='/'>
          <Image src='/logo.svg' alt='logo' width={150} height={40} quality={100} priority />
        </Link>
        <Burger openMenu={openMenu} toggleOpenMenu={toggleOpenMenu} />
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href='#two'>
                About
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href='#three'>
                Features
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href='#eleven'>
                Roadmap
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href='#partners'>
                Partners
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href='#blog'>
                Blog
              </a>
            </li>
            <li className={styles.item}>
              <ButtonColor href='#ten'>Airdrop <ArrayIcon/></ButtonColor>
            </li>
          </ul>
        </nav>
      </div>
      <MobileBurger openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};
