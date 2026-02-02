'use client';

import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import styles from './Quiz.module.css';

interface QuizOption {
  text: string;
  correct: boolean;
}

interface QuizProps {
  question: string;
  options: QuizOption[];
  onAnswer: (correct: boolean) => void;
}

export default function Quiz({ question, options, onAnswer }: QuizProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSelectOption = (index: number) => {
    if (hasAnswered) return;

    setSelectedOption(index);
    setHasAnswered(true);

    const isCorrect = options[index].correct;
    onAnswer(isCorrect);
  };

  return (
    <div className={styles.container}>
      <div className={styles.question}>{question}</div>
      <div className={styles.options}>
        {options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = option.correct;
          const showResult = hasAnswered && isSelected;

          return (
            <button
              key={index}
              className={`${styles.option} ${isSelected ? styles.selected : ''} ${
                showResult
                  ? isCorrect
                    ? styles.correct
                    : styles.incorrect
                  : ''
              }`}
              onClick={() => handleSelectOption(index)}
              disabled={hasAnswered}
            >
              <span className={styles.optionText}>{option.text}</span>
              {showResult && (
                <span className={styles.resultIcon}>
                  {isCorrect ? (
                    <Check size={24} color="white" />
                  ) : (
                    <X size={24} color="white" />
                  )}
                </span>
              )}
            </button>
          );
        })}
      </div>
      {hasAnswered && (
        <div
          className={`${styles.feedback} ${
            options[selectedOption!].correct
              ? styles.feedbackCorrect
              : styles.feedbackIncorrect
          }`}
        >
          {options[selectedOption!].correct ? 'Correct!' : 'Try again next time!'}
        </div>
      )}
    </div>
  );
}
