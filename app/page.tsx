'use client';

import React from 'react';
import { Star, Egg } from 'lucide-react';
import LevelNode from '@/components/Map/LevelNode';
import { useUserProgress } from '@/context/UserProgressContext';
import lessonsData from '@/data/lessons.json';
import styles from './page.module.css';

export default function Home() {
  const { progress, isLessonUnlocked, getLessonProgress } = useUserProgress();

  return (
    <div className={styles.container}>
      {/* Stats Bar */}
      <div className={styles.statsBar}>
        <div className={styles.stat}>
          <Star size={24} fill="var(--dragon-gold)" color="var(--dragon-gold)" />
          <span className={styles.statValue}>{progress.totalStars}</span>
          <span className={styles.statLabel}>Stars</span>
        </div>
        <div className={styles.stat}>
          <Egg size={24} color="var(--dragon-purple)" />
          <span className={styles.statValue}>{progress.dragonEggs}</span>
          <span className={styles.statLabel}>Dragon Eggs</span>
        </div>
      </div>

      {/* Title */}
      <div className={styles.header}>
        <h1 className={styles.title}>Dragon Eggs</h1>
        <p className={styles.subtitle}>Your Chinese Learning Adventure</p>
      </div>

      {/* Map/Levels */}
      <div className={styles.map}>
        <div className={styles.mapPath}>
          {lessonsData.lessons.map((lesson, index) => {
            const lessonProgress = getLessonProgress(lesson.id);
            const isUnlocked = isLessonUnlocked(lesson.requiredStars);
            const isCompleted = lessonProgress?.completed || false;
            const stars = lessonProgress?.stars || 0;

            return (
              <div key={lesson.id} className={styles.nodeWrapper}>
                <LevelNode
                  lessonId={lesson.id}
                  title={lesson.title}
                  icon={lesson.icon}
                  color={lesson.color}
                  isLocked={!isUnlocked}
                  stars={stars}
                  isCompleted={isCompleted}
                />
                {index < lessonsData.lessons.length - 1 && (
                  <div className={styles.connector} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
