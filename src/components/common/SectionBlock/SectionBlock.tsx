'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { Video } from '@/components/common/Video/Video';
import styles from './SectionBlock.module.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import clsx from 'clsx';



export const SectionBlock = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const inView = useInView(ref, {
    once: false,
  });

  const tabletSM = useMediaQuery('tabletSM');

  const refList = useRef(null);
  return (
    <section className={styles.sectionBlock} id='block'>
      
      <motion.div className={styles.centerText} ref={ref}
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -150 }}
        transition={{ duration: 1.5 }}>
        
        <motion.h2 className={styles.text} >
        Lumia’s Core Strengths
        </motion.h2>
      </motion.div>
      <div className={clsx(styles.videoWrapper, styles.mob)}>
        <video
          ref={videoRef}
          className={styles.video}
          preload='metadata'
          width={'100%'}
          height={'100%'}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={'/blocks-mobile.mp4'} type='video/mp4' />
        </video>
      </div>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          className={styles.video}
          preload='metadata'
          width={'100%'}
          height={'100%'}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={'/3.mp4'} type='video/mp4' />
        </video>
      </div>

      {/* <div className={styles.wrp} ref={refList}>
        {ARRAY_INFO.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.left ? -150 : 150 }}
              animate={{ opacity: inViewList ? 1 : 0, x: inViewList ? 0 : item.left ? -150 : 150 }}
              transition={{ duration: 1.5 }}
            >
              <div className={styles.box}>{item.title}</div>
            </motion.div>
          );
        })}
      </div> */}
    </section>
  );
};
