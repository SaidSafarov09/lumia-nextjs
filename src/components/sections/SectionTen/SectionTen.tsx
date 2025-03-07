'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionTen.module.scss';

export const SectionTen = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionTen} id='ten'>
      <Video src='/10.mp4' left />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <h2 className={styles.title}>Airdrop</h2>
          <p className={styles.description}>
            Lumia Ecosystem Airdrop: Season 1 - Drop #1 (Coming Soon)
            <br />
            <br />
            Lumia Ecosystem Airdrop: Season 1 - Drop #2 (Coming Soon)
          </p>
        </div>
      </motion.div>
    </section>
  );
};
