import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  current: number;
  total: number;
  showLabel?: boolean;
  height?: number;
  color?: string;
}

export default function ProgressBar({
  current,
  total,
  showLabel = true,
  height = 8,
  color = 'var(--dragon-emerald)',
}: ProgressBarProps) {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className={styles.container}>
      <div className={styles.track} style={{ height: `${height}px` }}>
        <div
          className={styles.fill}
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
            height: `${height}px`,
          }}
        />
      </div>
      {showLabel && (
        <span className={styles.label}>
          {current} / {total}
        </span>
      )}
    </div>
  );
}
