'use client';

import React from 'react';
import { Volume2 } from 'lucide-react';
import styles from './ToneTracer.module.css';

interface ToneTracerProps {
  character: string;
  pinyin: string;
  meaning: string;
  tone: number;
  audio?: string;
}

const toneDescriptions = {
  1: 'First Tone - High and Level (¯)',
  2: 'Second Tone - Rising (ˊ)',
  3: 'Third Tone - Falling-Rising (ˇ)',
  4: 'Fourth Tone - Falling (ˋ)',
};

const tonePaths = {
  1: 'M 50 50 L 350 50',
  2: 'M 50 100 L 350 20',
  3: 'M 50 50 L 200 100 L 350 40',
  4: 'M 50 20 L 350 120',
};

export default function ToneTracer({
  character,
  pinyin,
  meaning,
  tone,
  audio,
}: ToneTracerProps) {
  const playAudio = () => {
    if (audio) {
      const audioElement = new Audio(audio);
      audioElement.play().catch((err) => console.log('Audio playback failed:', err));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.character}>{character}</div>
        <div className={styles.pinyin}>{pinyin}</div>
        <div className={styles.meaning}>{meaning}</div>

        <div className={styles.toneVisualization}>
          <h3 className={styles.toneTitle}>
            {toneDescriptions[tone as keyof typeof toneDescriptions]}
          </h3>
          <svg
            className={styles.toneSvg}
            viewBox="0 0 400 140"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={tonePaths[tone as keyof typeof tonePaths]}
              stroke="var(--dragon-purple)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              className={styles.tonePath}
            />
          </svg>
        </div>

        {audio && (
          <button className={styles.audioButton} onClick={playAudio}>
            <Volume2 size={24} />
            <span>Play Sound</span>
          </button>
        )}
      </div>
    </div>
  );
}
