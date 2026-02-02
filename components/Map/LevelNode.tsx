'use client';

import React from 'react';
import Link from 'next/link';
import { Lock, Star } from 'lucide-react';
import styles from './LevelNode.module.css';

interface LevelNodeProps {
  lessonId: string;
  title: string;
  icon: string;
  color: string;
  isLocked: boolean;
  stars?: number;
  isCompleted: boolean;
}

export default function LevelNode({
  lessonId,
  title,
  icon,
  color,
  isLocked,
  stars = 0,
  isCompleted,
}: LevelNodeProps) {
  const nodeContent = (
    <div
      className={`${styles.node} ${isLocked ? styles.locked : ''} ${
        isCompleted ? styles.completed : ''
      }`}
      style={
        {
          '--node-color': isLocked ? 'var(--locked)' : `var(--${color})`,
        } as React.CSSProperties
      }
    >
      <div className={styles.iconContainer}>
        {isLocked ? (
          <Lock size={32} />
        ) : (
          <span className={styles.icon}>{icon === 'egg' ? '🥚' : '🐉'}</span>
        )}
      </div>
      <div className={styles.title}>{title}</div>
      {isCompleted && stars > 0 && (
        <div className={styles.stars}>
          {[1, 2, 3].map((i) => (
            <Star
              key={i}
              size={16}
              fill={i <= stars ? 'var(--dragon-gold)' : 'none'}
              color={i <= stars ? 'var(--dragon-gold)' : 'var(--border)'}
            />
          ))}
        </div>
      )}
    </div>
  );

  if (isLocked) {
    return <div className={styles.wrapper}>{nodeContent}</div>;
  }

  return (
    <Link href={`/lesson/${lessonId}`} className={styles.wrapper}>
      {nodeContent}
    </Link>
  );
}
