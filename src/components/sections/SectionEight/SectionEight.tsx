'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionEight.module.scss';
import { Features } from '@/components/common/Features/Features';

export const SectionEight = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionEight} id='eight'>
      <Video src='/8.mp4' left />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <Features queueNum='6'/>
          <h2 className={styles.title}>Aggregated Native Yield Restaking</h2>
          <p className={styles.description}>
            Lumia introduces industry-first yield maximization via Delta Neutral Liquidity
            Provisioning (DNLP) infrastructure, combined with yields derived from various restaking,
            liquid staking, and yield farming markets, making it ideal for RWA users.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
