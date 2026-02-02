'use client';

import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import styles from './Flashcard.module.css';

interface FlashcardProps {
  character: string;
  pinyin: string;
  meaning: string;
  tone: number[];
  audio?: string;
}

export default function Flashcard({
  character,
  pinyin,
  meaning,
  tone,
  audio,
}: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const playAudio = () => {
    if (audio) {
      const audioElement = new Audio(audio);
      audioElement.play().catch((err) => console.log('Audio playback failed:', err));
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={styles.cardFront}>
          <div className={styles.character}>{character}</div>
          <div className={styles.pinyin}>{pinyin}</div>
          {audio && (
            <button
              className={styles.audioButton}
              onClick={(e) => {
                e.stopPropagation();
                playAudio();
              }}
            >
              <Volume2 size={24} />
            </button>
          )}
          <div className={styles.hint}>Tap to see meaning</div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.meaning}>{meaning}</div>
          <div className={styles.character}>{character}</div>
          <div className={styles.pinyin}>{pinyin}</div>
        </div>
      </div>
    </div>
  );
}
