'use client';

import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import styles from './SentenceBuilder.module.css';

interface SentenceBuilderProps {
  prompt: string;
  correctOrder: string[];
  words: string[];
  onAnswer: (correct: boolean) => void;
}

export default function SentenceBuilder({
  prompt,
  correctOrder,
  words,
  onAnswer,
}: SentenceBuilderProps) {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>(words);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleWordClick = (word: string, fromAvailable: boolean) => {
    if (hasSubmitted) return;

    if (fromAvailable) {
      setSelectedWords([...selectedWords, word]);
      setAvailableWords(availableWords.filter((w, i) => {
        const idx = availableWords.indexOf(word);
        return i !== idx;
      }));
    } else {
      const index = selectedWords.lastIndexOf(word);
      setSelectedWords(selectedWords.filter((_, i) => i !== index));
      setAvailableWords([...availableWords, word]);
    }
  };

  const handleSubmit = () => {
    const correct = JSON.stringify(selectedWords) === JSON.stringify(correctOrder);
    setIsCorrect(correct);
    setHasSubmitted(true);
    onAnswer(correct);
  };

  const handleReset = () => {
    setSelectedWords([]);
    setAvailableWords(words);
    setHasSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.prompt}>{prompt}</div>

      <div className={styles.buildArea}>
        <div className={styles.label}>Build your sentence:</div>
        <div
          className={`${styles.sentenceBox} ${
            hasSubmitted ? (isCorrect ? styles.correct : styles.incorrect) : ''
          }`}
        >
          {selectedWords.length === 0 ? (
            <span className={styles.placeholder}>Tap words below to build the sentence</span>
          ) : (
            selectedWords.map((word, index) => (
              <button
                key={`${word}-${index}`}
                className={styles.word}
                onClick={() => handleWordClick(word, false)}
                disabled={hasSubmitted}
              >
                {word}
              </button>
            ))
          )}
        </div>
      </div>

      <div className={styles.wordsArea}>
        <div className={styles.label}>Available words:</div>
        <div className={styles.wordsGrid}>
          {availableWords.map((word, index) => (
            <button
              key={`${word}-available-${index}`}
              className={styles.word}
              onClick={() => handleWordClick(word, true)}
              disabled={hasSubmitted}
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {!hasSubmitted && selectedWords.length > 0 && (
        <div className={styles.actions}>
          <button className={styles.resetButton} onClick={handleReset}>
            Reset
          </button>
          <button className={styles.submitButton} onClick={handleSubmit}>
            Check Answer
          </button>
        </div>
      )}

      {hasSubmitted && (
        <div
          className={`${styles.feedback} ${
            isCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect
          }`}
        >
          {isCorrect ? (
            <>
              <Check size={24} />
              <span>Perfect! Well done!</span>
            </>
          ) : (
            <>
              <X size={24} />
              <span>Not quite. The correct order is: {correctOrder.join(' ')}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
